import { CarouselProvider, Slider, Slide, Image } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import styles from "./Project.module.scss";

export interface ProjectProp {
    name: string;
    description: string;
    previews: string[];
    alt: string[];
    link: string;
}

const size: number = 100;
function Project(props: ProjectProp) {
    return (
        <div className={styles.container}>
            <a href={props.link}>
                <h4>{props.name}</h4>
            </a>
            <CarouselProvider
                isPlaying={true}
                interval={2500}
                naturalSlideHeight={size}
                naturalSlideWidth={size}
                totalSlides={props.previews.length}
            >
                {GetSlider(props.previews, props.alt)}
            </CarouselProvider>
        </div>
    );
}

function GetSlider(images: string[], descriptions: string[]) {
    return (
        <Slider className={styles.container_slider}>
            {images.map((x, index) => (
                <Slide key={index} index={index}>
                    <Image
                        className={styles.container__image}
                        hasMasterSpinner={false}
                        src={x}
                        alt={descriptions[index]}
                    />
                </Slide>
            ))}
        </Slider>
    );
}
// have carosel here, showing previews with arrows

export default Project;
