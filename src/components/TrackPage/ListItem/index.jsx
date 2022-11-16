import { useLocation } from "react-router-dom";
import api from "../../../services/api";
import "../../../styles/utils.css";
import { getItem } from "../../../utils/storage";
import {
    ContentRow,
    CustomCheckBox,
    CustomCheckboxWrapper,
    ItemInfoWrapper,
    TitleWrapper,
    TypeTag,
} from "./styled";

export default function ListItem({
    trackInfo,
    setTrackInfo,
    handleGetUserSignedInfo,
}) {
    const location = useLocation();

    const handleChangeContent = (e) => {
        const dataId = Number(e.target.getAttribute("data-id"));

        const findIndex = trackInfo?.trackContent?.find((item) => {
            return item.id === dataId;
        });
        const newCurrent = trackInfo?.trackContent?.indexOf(findIndex);

        setTrackInfo({ ...trackInfo, current: newCurrent });
    };

    const handleCheckAsDone = async (e) => {
        const content_id = Number(e.target.getAttribute("data-id"));
        const user_id = Number(getItem("id"));
        const track_id = Number(location.state.trackId);
        const complete = e.target.checked;

        try {
            await api.put("/user/content/complete", {
                content_id,
                user_id,
                track_id,
                complete,
            });

            handleGetUserSignedInfo();
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            {trackInfo?.trackContent?.map((content, index) => {
                return (
                    <ContentRow
                        key={content?.id}
                        className="w-full flex justify-between items-center"
                        data-id={content?.id}
                    >
                        <ItemInfoWrapper
                            onClick={handleChangeContent}
                            className="w-full h-[89px] py-4 px-2 flex flex-col justify-between"
                            data-id={content?.id}
                        >
                            <TitleWrapper
                                className="flex justify-between items-center"
                                data-id={content?.id}
                            >
                                <h2
                                    className="w-[189px] truncate font-semibold"
                                    data-id={content?.id}
                                >
                                    {content?.name}
                                </h2>
                                <span className="text-xs" data-id={content?.id}>
                                    {content?.duration}
                                </span>
                            </TitleWrapper>
                            <div
                                className="flex items-center gap-4"
                                data-id={content.id}
                            >
                                <TypeTag
                                    className="px-[10px]"
                                    data-id={content?.id}
                                >
                                    {content?.type}
                                </TypeTag>
                                <span data-id={content?.id}>
                                    {content?.creator}
                                </span>
                            </div>
                        </ItemInfoWrapper>
                        <CustomCheckboxWrapper
                            onChange={handleCheckAsDone}
                            data-id={content?.id}
                            className="w-10 h-10 flex flex-col items-center justify-center"
                        >
                            <CustomCheckBox
                                className="h-[18px] w-[18px]"
                                checked={content?.complete}
                                data-id={content?.id}
                                type="checkbox"
                            />
                        </CustomCheckboxWrapper>
                    </ContentRow>
                );
            })}
        </>
    );
}
