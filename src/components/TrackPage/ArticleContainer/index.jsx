import { Container, ArticleImage, ArticleSubtitle, ArticleText, ArticleTitle, CustomButton } from './styled';
import '../../../styles/utils.css';
import DonNorman from '../../../assets/don-norman.png';

export default function ArticleContainer() {
    let type = 'artigo';

    return (
        <Container className='column'>
            <ArticleTitle>
                Lorem ipsum dolor sit amet consectetur.
            </ArticleTitle>
            <ArticleSubtitle>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, sequi non eius libero rem distinctio provident iusto aliquid ipsa alias.
            </ArticleSubtitle>
            <ArticleImage src={DonNorman} />
            <ArticleText>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora tenetur et vero dignissimos cupiditate, aperiam soluta provident? Numquam suscipit consectetur atque et labore voluptates, repellendus sapiente eum illo non quis quibusdam minus minima provident quisquam consequatur iusto earum, aspernatur est cum ducimus aliquam blanditiis beatae. Libero molestiae earum praesentium nulla.
            </ArticleText>
            <CustomButton className='call-button'>{type === 'artigo' ? 'Leia o artigo' : 'Acesse o conteúdo'}</CustomButton>
        </Container>
    )
}