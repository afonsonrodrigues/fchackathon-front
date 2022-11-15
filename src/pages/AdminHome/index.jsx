import { SignOut } from 'phosphor-react';
import { useEffect, useState } from 'react';
import ColoredLogo from '../../assets/colored-logo.svg';
import AddContentToTrackModal from '../../components/AdminHome/AddContentToTrackModal';
import AddTrackModal from '../../components/AdminHome/AddTrackModal';
import ContentRow from '../../components/AdminHome/ContentRow';
import TrackRow from '../../components/AdminHome/TrackRow';
import { TableHead } from './styled';
import api from '../../services/api';
import ConfirmModal from '../../components/AdminHome/ConfirmModal';
import '../../styles/utils.css';

export default function AdminHome({ name, type, track, url, duration, creator }) {
    const [openAddTrackModal, setOpenAddTrackModal] = useState(false);
    const [openAddContentModal, setOpenAddContentModal] = useState(false);
    const [confirmModal, setConfirmModal] = useState(false);
    const [editTrackModal, setEditTrackModal] = useState({
        open: false,
        track_id: null,
        name: 1,
        error: ''
    });
    const [tracksAndContents, setTracksAndContents] = useState({
        tracks: [],
        contents: []
    });


    const handleGetAllTracksNContent = async () => {
        const { data: tracksData } = await api.get('/user/all_tracks');
        const tracks = tracksData?.tracks;

        const { data: contentsData } = await api.get('/track/all_contents');
        setTracksAndContents({ ...tracksAndContents, contents: contentsData, tracks })
    }

    const handleSubmitEditTrack = () => {
        setConfirmModal(!confirmModal)
    }

    const handleEditTrackChange = (e) => {
        setEditTrackModal({ ...editTrackModal, [e.target.name]: e.target.value })
    }

    useEffect(() => {
        const canControlScrollRestoration = 'scrollRestoration' in window.history
        if (canControlScrollRestoration) {
            window.history.scrollRestoration = 'manual';
        }

        window.scrollTo(0, 0);
        handleGetAllTracksNContent();
    }, []);

    return (
        <div className='flex flex-col w-full items-center mt-[50px]'>
            <nav className='w-full h-24 fixed top-0 flex justify-between items-center px-16'>
                <img className='h-10' src={ColoredLogo} alt="company logo" />
                <SignOut size={30} />
            </nav>
            <main className='flex flex-col items-center'>
                {openAddTrackModal &&
                    <AddTrackModal
                        openAddTrackModal={openAddTrackModal}
                        setOpenAddTrackModal={setOpenAddTrackModal}
                        confirmModal={confirmModal}
                        setConfirmModal={setConfirmModal}
                        path={'/add_track'}
                        handleGetAllTracksNContent={handleGetAllTracksNContent}
                    />
                }
                {openAddContentModal &&
                    <AddContentToTrackModal
                        allTracks={tracksAndContents.tracks}
                        confirmModal={confirmModal}
                        setConfirmModal={setConfirmModal}
                        path={'/add_content'}
                        setOpenAddContentModal={setOpenAddContentModal}
                        openAddContentModal={openAddContentModal}
                        handleGetAllTracksNContent={handleGetAllTracksNContent}
                    />
                }
                {editTrackModal.open &&
                    <div className='modal-bg absolute'>
                        <div className='fixed right-[40%] top-[20%] w-[500px] h-[300px] bg-white flex flex-col items-center justify-center gap-8 z-10 '>
                            <label>Novo nome da trilha</label>
                            <input className='h-[52px] px-4 w-[500px]' onChange={handleEditTrackChange} name='name' placeholder='Digite o novo nome' />
                            <div className='flex gap-12 text-white'>
                                <button
                                    className='bg-[#a843e0] px-4 py-2'
                                    onClick={(e) => setEditTrackModal({ ...editTrackModal, open: false })}
                                >
                                    Cancelar
                                </button>
                                <button
                                    className='bg-[#871cd3] px-4 py-2'
                                    onClick={handleSubmitEditTrack}
                                >
                                    Enviar
                                </button>
                                {confirmModal && <ConfirmModal handleGetAllTracksNContent={handleGetAllTracksNContent} editTrackModal={editTrackModal} setEditTrackModal={setEditTrackModal} setConfirmModal={setConfirmModal} path='/edit_track' />}
                            </div>
                            <span className='absolute bottom-0'>{editTrackModal.error && editTrackModal.error}</span>
                        </div>
                    </div>
                }
                <div className='flex justify-between w-[1024px]'>
                    <div className='flex items-center h-[200px] w-[470px] gap-2 text-white'>
                        <button
                            onClick={(e) => setOpenAddTrackModal(!openAddTrackModal)}
                            style={{ backgroundColor: 'var(--secondary-color-600)' }} className='px-6 py-4 rounded-[32px] cursor-pointer w-[404px]'>Adicionar trilha
                        </button>
                        <button
                            onClick={(e) => setOpenAddContentModal(!openAddContentModal)}
                            style={{ backgroundColor: 'var(--secondary-color-600)' }}
                            className='px-6 py-4 rounded-[32px] cursor-pointer w-[404px]'>Adicionar conteúdo
                        </button>
                    </div>
                </div>
                <div className='flex flex-col gap-4 mb-12'>
                    <h1 className='font-bold'>Conteúdos</h1>
                    <table className="table-auto rounded-2xl w-[1024px]">
                        <TableHead className='th h-[57px] bg-white rounded-2xl'>
                            <tr className='rounded-2xl border-b-2'>
                                <th>Título</th>
                                <th>Tipo</th>
                                <th>Duração</th>
                                <th>Criado por</th>
                                <th>Trilha</th>
                                <th>Editar/Excluir</th>
                            </tr>
                        </TableHead>
                        <tbody>
                            {tracksAndContents?.contents.map((content) => {
                                return <ContentRow
                                    key={content.id}
                                    content={content}
                                    existingTracks={tracksAndContents.tracks}
                                    handleGetAllTracksNContent={handleGetAllTracksNContent}
                                />
                            })}
                        </tbody>
                    </table>
                </div>
                <div className='mb-[102px]'>
                    <h1 className='font-bold'>Trilhas</h1>
                    <table className="table-auto rounded-2xl w-[1024px]">
                        <TableHead className='th h-[57px] bg-white rounded-2xl'>
                            <tr className='rounded-2xl'>
                                <th>Nome</th>
                                <th>Data de cadastro</th>
                                <th>Criado por</th>
                                <th>Editar/Excluir</th>
                            </tr>
                        </TableHead>
                        <tbody>
                            {tracksAndContents?.tracks?.map((track) => {
                                return (
                                    <TrackRow
                                        key={track.id}
                                        track={track}
                                        handleGetAllTracksNContent={handleGetAllTracksNContent}
                                        allTracks={tracksAndContents.tracks}
                                        setEditTrackModal={setEditTrackModal}
                                        editTrackModal={editTrackModal}
                                    />
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </main >
        </div >
    )
}