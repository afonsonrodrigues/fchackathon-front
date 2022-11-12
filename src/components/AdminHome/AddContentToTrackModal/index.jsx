import { useEffect, useState } from "react";
import { InputWrapper, AddContentModal, CustomInput, TextInput } from "./styled";
import ConfirmModal from '../ConfirmModal';
import '../../../styles/utils.css';
import api from "../../../services/api";

export default function AddContentToTrackModal({ setOpenAddContentModal, confirmModal, setConfirmModal, path }) {
    const [allTracks, setAllTracks] = useState([]);
    const [addContentForm, setAddContentForm] = useState({
        name: '',
        subtitle: '',
        track_id: '',
        type: '',
        duration: '',
        creator: '',
        url: '',
        description: '',
        url_image: '',
        error: ''
    });

    const handleChange = (e) => {
        setAddContentForm({ ...addContentForm, [e.target.name]: e.target.value });
    }

    const handleGetAllTracks = async () => {
        const { data } = await api.get('/user/all_tracks');

        setAllTracks(data.tracks);
    }

    useEffect(() => {
        handleGetAllTracks();
    }, []);

    return (
        <div className="modal-bg">
            {confirmModal && <ConfirmModal addContentForm={addContentForm} setAddContentForm={setAddContentForm} setConfirmModal={setConfirmModal} setOpenAddContentModal={setOpenAddContentModal} path={'/add_content'} />}
            <AddContentModal className="column">
                <InputWrapper>
                    <label htmlFor="">Título do Conteúdo*</label>
                    <CustomInput onChange={handleChange} name="name" value={addContentForm.name} type="text" placeholder="Digite o nome do conteúdo" />
                </InputWrapper>
                <div>
                    <label htmlFor="">Subtítulo do Conteúdo</label>
                    <TextInput
                        onChange={handleChange}
                        name="subtitle"
                        value={addContentForm.subtitle}
                        style={{ height: '6rem' }}
                        type="text"
                        placeholder="Em caso de subtítulo, digite aqui"
                    />
                </div>
                <InputWrapper>
                    <label htmlFor="">Criador do Conteúdo*</label>
                    <CustomInput onChange={handleChange} name="creator" value={addContentForm.creator} type="text" placeholder="Digite o nome do criador" />
                </InputWrapper>
                <InputWrapper>
                    <label htmlFor="">Tipo de Conteúdo*</label>
                    <select onChange={handleChange} name="type" value={addContentForm.type} placeholder="Digite o tipo do conteúdo" >
                        <option disabled></option>
                        <option>Video</option>
                        <option>Live</option>
                        <option>Artigo</option>
                        <option>Curso</option>
                        <option>Apostila</option>
                    </select>
                </InputWrapper>
                <InputWrapper>
                    <label htmlFor="">Trilha de Conhecimento*</label>
                    <select onChange={handleChange} name="track_id" value={addContentForm.track_id} placeholder="Digite o tipo do conteúdo" >
                        <option disabled></option>
                        {allTracks.map((track) => {
                            return <option key={track.id}>{`${track.name} - ${track.id}`}</option>
                        })}
                    </select>
                </InputWrapper>
                <InputWrapper>
                    <label htmlFor="">Duração do Conteúdo*</label>
                    <CustomInput onChange={handleChange} name="duration" value={addContentForm.duration} type="text" placeholder="00:00:00" />
                </InputWrapper>
                <InputWrapper>
                    <label htmlFor="">URL do Conteúdo*</label>
                    <CustomInput onChange={handleChange} name="url" value={addContentForm.url} type="text" placeholder="Informe a URL do conteúdo" />
                </InputWrapper>
                <div>
                    <label htmlFor="">Descrição do Conteúdo</label>
                    <TextInput onChange={handleChange} name="description" value={addContentForm.description} type="text" placeholder="Digite a descrição do conteúdo" />
                </div>
                <InputWrapper>
                    <label htmlFor="">URL da imagem do Conteúdo</label>
                    <CustomInput onChange={handleChange} name="url_image" value={addContentForm.url_image} type="text" placeholder="Informe a URL da imagem do conteúdo" />
                </InputWrapper>
                <span>{addContentForm.error && addContentForm.error}</span>
                <div className="row space-btw">
                    <button onClick={(e) => setOpenAddContentModal(false)}>Cancelar</button>
                    <button onClick={(e) => setConfirmModal(true)}>Adicionar</button>
                </div>
            </AddContentModal>
        </div>
    )
}