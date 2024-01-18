import Image from "@/node_modules/next/image"
import styles from '../page.module.css'

export default function Attribution() {
    return (
        <>
        <footer id={styles.attribution} role="contentinfo">
            Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
            <a href="https://github.com/JoaoGabrielCHelena">
                <Image
                    src='/polygon.svg'
                    alt='My Github'
                    width={56}
                    height={56}
                />
            </a>
        </footer>
        </>
    )
}