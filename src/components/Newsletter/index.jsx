import { CustomButtom, CheckboxContainer } from './styled';

export default function Newsletter() {
    return (
        <div className="flex flex-col text-white xl:items-center" style={{ backgroundColor: `var(--primary-color-900)` }}>
            <div className='sm:w-[634px] md:mx-12 lg:flex lg:flex-row lg:items-start xl:w-[1280px] xl:justify-start xl:pl-2'>
                <div className="mb-8 sm:mb-10 mt-10 px-4 lg:px-0 lg:pr-0">
                    <h2
                        className='text-2xl font-bold'
                        style={{ color: `var(--secondary-color-200)` }}
                    >
                        Assine nossa newsletter
                    </h2>
                    <div className='sm:w-[387px] text-sm lg:w-[355px]'>
                        <p>Fique por dentro dos conteúdos da
                            Orange Juice e não perca nenhuma novidade sobre nossa comunidade.</p>
                    </div>
                </div>
                <form className="flex flex-col w-[358px] items-center sm:items-start sm:justify-center lg:pt-6">
                    <div className="flex flex-col gap-6 mb-8">
                        <div className="px-4 flex flex-col gap-6 sm:flex-row sm:gap-16 md:gap-8">
                            <label className="text-sm flex flex-col">
                                Nome
                                <input className="px-4 h-[52px] placeholder:text-sm sm:w-[285px] mt-1" type="text" placeholder="Digite o seu nome" />
                            </label>
                            <label className="text-sm flex flex-col">
                                E-mail
                                <input className="px-4 h-[52px] placeholder:text-sm sm:w-[285px] mt-1" type="text" placeholder="Digite o seu melhor e-mail" />
                            </label>
                        </div>
                        <div className="flex items-center w-[358px] sm:[634px] px-4">
                            <label className="text-sm flex items-center gap-3">
                                <CheckboxContainer className='flex flex-col items-center justify-center'>
                                    <input type="checkbox" />
                                </CheckboxContainer>
                                <div className="sm:w-[634px] md:w-[534px]">
                                    Eu concordo em receber comunicações da Orange Juice e do Grupo FCamara. Ao informar meus dados, e estou ciente das diretrizes da <a className='font-semibold' href="#">Políitica de Privacidade</a>.
                                </div>
                            </label>
                        </div>
                    </div>
                    <CustomButtom
                        className="mx-8 sm:mx-4 w-[156px] h-[52px] mb-20"
                    >
                        Assinar
                    </CustomButtom>
                </form>
            </div>
        </div>
    )
}