import { useState } from "react";
import { InputWrapper, AddContentModal } from "./styled";
import ConfirmModal from '../ConfirmModal';
import '../../../styles/utils.css';

export default function AddContentToTrackModal({ setOpenAddContentModal, confirmModal, setConfirmModal, path }) {
    const [addContentForm, setAddContentForm] = useState({
        name: '',
        type: '',
        duration: '',
        complete: '',
        url: '',
        description: '',
        url_image: '',
        error: ''
    });

    const handleChange = (e) => {
        setAddContentForm({ ...addContentForm, complete: false, [e.target.name]: e.target.value });
    }

    return (
        <div className="modal-bg">
            {confirmModal && <ConfirmModal addContentForm={addContentForm} setAddContentForm={setAddContentForm} setConfirmModal={setConfirmModal} setOpenAddContentModal={setOpenAddContentModal} path={'/add_content'} />}
            <AddContentModal className="column space-btw">
                <InputWrapper>
                    <label htmlFor="">Nome do Conteúdo*</label>
                    <input onChange={handleChange} name="name" value={addContentForm.name} type="text" placeholder="Digite o nome do conteúdo" />
                </InputWrapper>
                <InputWrapper>
                    <label htmlFor="">Tipo do Conteúdo*</label>
                    <input onChange={handleChange} name="type" value={addContentForm.type} type="text" placeholder="Digite o tipo do conteúdo" />
                </InputWrapper>
                <InputWrapper>
                    <label htmlFor="">Duração do Conteúdo*</label>
                    <input onChange={handleChange} name="duration" value={addContentForm.duration} type="text" placeholder="Digite a duração do conteúdo" />
                </InputWrapper>
                <InputWrapper>
                    <label htmlFor="">Complete</label>
                    <input onChange={handleChange} name="complete" value={addContentForm.complete} type="text" placeholder="Informe a URL do conteúdo" />
                </InputWrapper>
                <InputWrapper>
                    <label htmlFor="">URL do Conteúdo*</label>
                    <input onChange={handleChange} name="url" value={addContentForm.url} type="text" placeholder="Informe a URL do conteúdo" />
                </InputWrapper>
                <InputWrapper>
                    <label htmlFor="">Descrição do Conteúdo</label>
                    <input onChange={handleChange} name="description" value={addContentForm.description} type="text" placeholder="Digite a descrição do conteúdo" />
                </InputWrapper>
                <InputWrapper>
                    <label htmlFor="">URL da imagem do Conteúdo</label>
                    <input onChange={handleChange} name="url_image" value={addContentForm.url_image} type="text" placeholder="Informe a URL da imagem do conteúdo" />
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