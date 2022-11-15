import { useEffect, useState } from "react";
import { InputWrapper, AddContentModal, CustomInput, TextInput } from "./styled";
import ConfirmModal from '../ConfirmModal';
import '../../../styles/utils.css';
import api from "../../../services/api";

export default function AddContentToTrackModal({ setOpenAddContentModal, confirmModal, setConfirmModal, path, allTracks, handleGetAllTracksNContent, openAddContentModal }) {
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

    useEffect(() => {

    }, []);

    return (
        <div className="modal-bg">
            {confirmModal &&
                <ConfirmModal
                    addContentForm={addContentForm}
                    setAddContentForm={setAddContentForm}
                    setConfirmModal={setConfirmModal}
                    setOpenAddContentModal={setOpenAddContentModal}
                    handleGetAllTracksNContent={handleGetAllTracksNContent}
                    path={path}
                />
            }
            <AddContentModal className="h-[800px] mt-[220px] w-[600px] flex flex-col justify-between px-10 py-4">
                <InputWrapper className="flex flex-col">
                    <label className='text-base'>Título do Conteúdo*</label>
                    <CustomInput className="h-8 px-4 placeholder:text-base" onChange={handleChange} name="name" value={addContentForm.name} type="text" placeholder="Digite o nome do conteúdo" />
                </InputWrapper>
                <div className="flex flex-col">
                    <label className='text-base'>Subtítulo do Conteúdo</label>
                    <TextInput
                        className="h-16 w-full bg-[#ebebed] rounded-2xl p-2"
                        onChange={handleChange}
                        name="subtitle"
                        value={addContentForm.subtitle}
                        type="text"
                        placeholder="Em caso de subtítulo, digite aqui"
                    />
                </div>
                <InputWrapper className="flex flex-col">
                    <label className='text-base'>Criador do Conteúdo*</label>
                    <CustomInput className="h-8 px-4 placeholder:text-base" onChange={handleChange} name="creator" value={addContentForm.creator} type="text" placeholder="Digite o nome do criador" />
                </InputWrapper>
                <InputWrapper className="flex flex-col">
                    <label className='text-base'>Tipo de Conteúdo*</label>
                    <select className="bg-[#ebebed] h-8 rounded-2xl" onChange={handleChange} name="type" value={addContentForm.type} placeholder="Digite o tipo do conteúdo" >
                        <option disabled></option>
                        <option>Video</option>
                        <option>Artigo</option>
                        <option>Curso</option>
                        <option>Apostila</option>
                    </select>
                </InputWrapper >
                <InputWrapper className="flex flex-col">
                    <label className='text-base'>Trilha de Conhecimento*</label>
                    <select className="bg-[#ebebed] h-8 rounded-2xl" onChange={handleChange} name="track_id" value={addContentForm.track_id} placeholder="Digite o tipo do conteúdo" >
                        <option disabled></option>
                        {allTracks.map((track) => {
                            return <option key={track.id}>{`${track.name} - ${track.id}`}</option>
                        })}
                    </select>
                </InputWrapper>
                <InputWrapper className="flex flex-col">
                    <label className='text-base'>Duração do Conteúdo*</label>
                    <CustomInput className="h-8 px-4 placeholder:text-base" onChange={handleChange} name="duration" value={addContentForm.duration} type="text" placeholder="00:00:00" />
                </InputWrapper>
                <InputWrapper className="flex flex-col">
                    <label className='text-base'>URL do Conteúdo*</label>
                    <CustomInput className="h-8 px-4 placeholder:text-base" onChange={handleChange} name="url" value={addContentForm.url} type="text" placeholder="Informe a URL do conteúdo" />
                </InputWrapper>
                <div className="flex flex-col">
                    <label className='text-base'>Descrição do Conteúdo</label>
                    <TextInput className="h-24 w-full bg-[#ebebed] rounded-2xl p-2" onChange={handleChange} name="description" value={addContentForm.description} type="text" placeholder="Digite a descrição do conteúdo" />
                </div>
                <InputWrapper className="flex flex-col relative mb-6">
                    <label className='text-base'>URL da imagem do Conteúdo</label>
                    <CustomInput className="h-8 px-4 placeholder:text-base" onChange={handleChange} name="url_image" value={addContentForm.url_image} type="text" placeholder="Informe a URL da imagem do conteúdo" />
                    <span className="text-sm absolute bottom-[-25px] text-red-400 font-medium">{addContentForm.error && addContentForm.error}</span>
                </InputWrapper>
                <div className="flex justify-between">
                    <button onClick={(e) => setOpenAddContentModal(false)}>Cancelar</button>
                    <button onClick={(e) => setConfirmModal(true)}>Adicionar</button>
                </div>
            </AddContentModal>
        </div >
    )
}