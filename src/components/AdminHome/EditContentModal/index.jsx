import { useState } from "react";
import '../../../styles/utils.css';
import ConfirmModal from '../ConfirmModal';
import { AddContentModal, CustomInput, InputWrapper, TextInput } from "./styled";

export default function EditContentToTrackModal({ setOpenEditContentModal, confirmModal, setConfirmModal, path, allTracks, handleGetAllTracksNContent, tracksAndContents, openEditContentModal }) {
    const [editContentForm, setEditContentForm] = useState({ ...openEditContentModal });

    const handleChange = (e) => {
        setEditContentForm({ ...editContentForm, [e.target.name]: e.target.value });
    }

    return (
        <div className="modal-bg">
            {confirmModal &&
                <ConfirmModal
                    editContentForm={editContentForm}
                    setEditContentForm={setEditContentForm}
                    setConfirmModal={setConfirmModal}
                    setOpenEditContentModal={setOpenEditContentModal}
                    handleGetAllTracksNContent={handleGetAllTracksNContent}
                    path='/update_content'
                />
            }
            <AddContentModal className="h-[800px] mt-[220px] w-[600px] flex flex-col justify-between px-10 py-4">
                <InputWrapper className="flex flex-col">
                    <label className='text-base'>Título do Conteúdo*</label>
                    <CustomInput className="h-8 px-4 placeholder:text-base" onChange={handleChange} name="name" value={editContentForm.name} type="text" placeholder="Digite o nome do conteúdo" />
                </InputWrapper>
                <div className="flex flex-col">
                    <label className='text-base'>Subtítulo do Conteúdo</label>
                    <TextInput
                        className="h-16 w-full bg-[#ebebed] rounded-2xl p-2"
                        onChange={handleChange}
                        name="subtitle"
                        value={editContentForm.subtitle}
                        type="text"
                        placeholder="Em caso de subtítulo, digite aqui"
                    />
                </div>
                <InputWrapper className="flex flex-col">
                    <label className='text-base'>Criador do Conteúdo*</label>
                    <CustomInput className="h-8 px-4 placeholder:text-base" onChange={handleChange} name="creator" value={editContentForm.creator} type="text" placeholder="Digite o nome do criador" />
                </InputWrapper>
                <InputWrapper className="flex flex-col">
                    <label className='text-base'>Tipo de Conteúdo*</label>
                    <select className="bg-[#ebebed] h-8 rounded-2xl" onChange={handleChange} name="type" value={editContentForm.type} placeholder="Digite o tipo do conteúdo" >
                        <option disabled></option>
                        <option>Video</option>
                        <option>Artigo</option>
                        <option>Curso</option>
                        <option>Apostila</option>
                    </select>
                </InputWrapper >
                <InputWrapper className="flex flex-col">
                    <label className='text-base'>Trilha de Conhecimento*</label>
                    <select className="bg-[#ebebed] h-8 rounded-2xl" onChange={handleChange} name="track_id" value={editContentForm.track_id} placeholder="Digite o tipo do conteúdo" >
                        <option disabled></option>
                        {allTracks.map((track) => {
                            return <option key={track.id}>{`${track.name} - ${track.id}`}</option>
                        })}
                    </select>
                </InputWrapper>
                <InputWrapper className="flex flex-col">
                    <label className='text-base'>Duração do Conteúdo*</label>
                    <CustomInput className="h-8 px-4 placeholder:text-base" onChange={handleChange} name="duration" value={editContentForm.duration} type="text" placeholder="00:00:00" />
                </InputWrapper>
                <InputWrapper className="flex flex-col">
                    <label className='text-base'>URL do Conteúdo*</label>
                    <CustomInput className="h-8 px-4 placeholder:text-base" onChange={handleChange} name="url" value={editContentForm.url} type="text" placeholder="Informe a URL do conteúdo" />
                </InputWrapper>
                <div className="flex flex-col">
                    <label className='text-base'>Descrição do Conteúdo</label>
                    <TextInput className="h-24 w-full bg-[#ebebed] rounded-2xl p-2" onChange={handleChange} name="description" value={editContentForm.description} type="text" placeholder="Digite a descrição do conteúdo" />
                </div>
                <InputWrapper className="flex flex-col relative mb-6">
                    <label className='text-base'>URL da imagem do Conteúdo</label>
                    <CustomInput className="h-8 px-4 placeholder:text-base" onChange={handleChange} name="url_image" value={editContentForm.url_image} type="text" placeholder="Informe a URL da imagem do conteúdo" />
                    <span className="text-sm absolute bottom-[-25px] text-red-400 font-medium">{editContentForm.error && editContentForm.error}</span>
                </InputWrapper>
                <div className="flex justify-between">
                    <button onClick={(e) => setOpenEditContentModal(false)}>Cancelar</button>
                    <button onClick={(e) => setConfirmModal(true)}>Adicionar</button>
                </div>
            </AddContentModal>
        </div >
    )
}