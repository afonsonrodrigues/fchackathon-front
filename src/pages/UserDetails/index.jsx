import { useEffect, useState } from "react";
import Footer from "../../components/Footer";
import BgBanner from "../../components/UserDetails/BgBanner";
import UserTracks from "../../components/UserDetails/UserTracks";
import UserUpdate from "../../components/UserDetails/UserUpdate";
import DevIcon from "../../assets/lucas.png";
import NavBar from "../../components/NavBar";
import api from "../../services/api";
import "../../styles/utils.css";
import { getItem } from "../../utils/storage";
import {
    Container,
    TracksContainer,
    UserTracksContainer,
    ButtonDel,
    MenuPageUser,
    TrackWrapper,
} from "./styled";

export default function UserDetails() {
    const [changePage, setchangePage] = useState(true);
    const [updatePage, setupdatePage] = useState(true);
    const [userSignedTracks, setUserSignedTracks] = useState({
        signedTracks: null,
        tracksContents: null,
        completion: null,
        current: null,
    });

    const name = getItem("name");
    const email = getItem("email");

    const getExistingTracks = async () => {
        const id = Number(getItem("id"));

        const { data: userTracks } = await api.get(`/user/tracks/${id}`);
        const { data: userContents } = await api.get(`/user/${id}/contents`);

        const totalObj = {};
        userTracks.map((track) => {
            const filterContents = userContents.filter((item) => {
                return item.track_id === track.track_id;
            });
            totalObj[track.track_id] = filterContents;

            return totalObj;
        });

        const progressObj = {};
        userTracks.map((track) => {
            const filterContents = userContents.filter((item) => {
                return item.track_id === track.track_id && item.complete;
            });
            progressObj[track.track_id] = filterContents;

            return { ...progressObj };
        });

        setUserSignedTracks({
            ...userSignedTracks,
            tracksContents: userContents,
            signedTracks: userTracks,
            completion: totalObj,
            current: progressObj,
        });
    };

    useEffect(() => {
        getExistingTracks();
    }, []);

    const changePageTrack = async () => {
        setchangePage(true);
    };
    const changePageUser = async () => {
        setchangePage(false);
    };
    const changeUpdate = async () => {
        setupdatePage(false);
    };

    return (
        <Container>
            <NavBar rgb={"63, 72, 227"} color={"--blue-user-page"} />
            <BgBanner />
            <main className="flex flex-col items-center">
                <div className="w-[358px] sm:w-[703px] lg:w-[1008px] flex flex-col items-start pt-36">
                    <div
                        style={{
                            color: "white",
                            fontSize: "2.5rem",
                            fontWeight: "bold",
                        }}
                    >
                        {name}
                    </div>
                </div>
                <UserTracksContainer className="w-[358px] sm:w-[703px] lg:w-[1008px] flex flex-col items-center">
                    <div className="flex">
                        <MenuPageUser
                            onClick={() => changePageTrack()}
                            under={changePage ? "underline" : "none"}
                        >
                            Minhas trilhas
                        </MenuPageUser>

                        <MenuPageUser
                            onClick={() => changePageUser()}
                            under={changePage ? "none" : "underline"}
                        >
                            Editar cadastro
                        </MenuPageUser>
                    </div>
                    <div className="w-[358px] sm:w-[703px] lg:w-[1008px] flex flex-col items-start">
                        <div style={{ fontWeight: "bold", padding: "0.5rem" }}>
                            Dashboard
                        </div>
                    </div>
                    <div>
                        {changePage ? (
                            <section
                                className="px-[24px] sm:px-8 flex flex-col"
                                id="tracks-list"
                            >
                                <TracksContainer className="mb-4 gap-[16px] sm:flex-row sm:flex-wrap sm:gap-[16px]">
                                    {userSignedTracks?.signedTracks?.map(
                                        (track) => {
                                            const totalProgress =
                                                userSignedTracks.completion[
                                                    track.track_id
                                                ].filter((item) => {
                                                    return item;
                                                });
                                            const userProgress =
                                                userSignedTracks.completion[
                                                    track.track_id
                                                ].filter((item) => {
                                                    return item.complete;
                                                });
                                            return (
                                                <UserTracks
                                                    trackName={track.name}
                                                    progressNumbers={{
                                                        currentProgress:
                                                            userProgress.length,
                                                        totalProgress:
                                                            totalProgress.length,
                                                    }}
                                                />
                                            );
                                        }
                                    )}
                                </TracksContainer>
                            </section>
                        ) : (
                            <TrackWrapper className="w-[358px] h-[400px] sm:w-[703px] sm:h-[263px] lg:w-[1008px] lg:h-[278px] flex flex-col items-center sm:flex sm:flex-row sm:items-center lg:flex lg:items-center">
                                <div
                                    className="flex flex-col items-center mt-3"
                                    style={{
                                        width: "27%",
                                    }}
                                >
                                    <img
                                        className="w-[88px] mb-2"
                                        src={DevIcon}
                                        alt="track icon"
                                    />
                                    <text className="font-bold">{name}</text>
                                </div>
                                {updatePage ? (
                                    <div className="flex flex-col items-center sm:flex sm:flex-row sm:justify-between lg:flex lg:flex-row lg:justify-between w-[25rem] sm:w-[62%] lg:w-[62%]">
                                        <div
                                            className="flex flex-col"
                                            style={{ width: "60%" }}
                                        >
                                            <text className="mb-3">
                                                Editar minhas informações
                                            </text>
                                            <div className="mb-3">
                                                <text className="font-medium">
                                                    Nome:&nbsp;
                                                </text>
                                                <text>{name}</text>
                                            </div>
                                            <div className="mb-3">
                                                <text className="font-medium">
                                                    E-mail:&nbsp;
                                                </text>
                                                <text>{email}</text>
                                            </div>
                                            <div className="mb-3">
                                                <text className="font-medium">
                                                    Senha:&nbsp;
                                                </text>
                                                <text>********</text>
                                            </div>
                                        </div>

                                        <div>
                                            <div className="flex flex-col items-start ml-5">
                                                <button
                                                    onClick={() =>
                                                        changeUpdate()
                                                    }
                                                >
                                                    Alterar
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ) : (
                                    <UserUpdate setupdatePage={setupdatePage} />
                                )}
                            </TrackWrapper>
                        )}
                    </div>
                </UserTracksContainer>
                <div
                    className="w-[358px] sm:w-[703px] sm:h-[263px] lg:w-[1008px] flex flex-col items-center sm:items-start lg:items-start"
                    style={{ paddingTop: "3rem" }}
                >
                    <text>Seu progresso pode incentivar a comunidade,</text>
                    <text>compartilhe seu conhecimento com a gente!</text>
                    <a
                        href="https://discord.com/invite/NtESsDFGx5"
                        target="_blank"
                    >
                        <ButtonDel>Discord</ButtonDel>
                    </a>
                </div>
            </main>
            <Footer />
        </Container>
    );
}
