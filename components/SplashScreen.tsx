import { motion } from "framer-motion"
interface SplashScreenProps {
    className: any
}

const SplashScreen = ({className}: SplashScreenProps) => {

    return (
        <div className={`flex items-center justify-center w-full h-screen bg-white ${className}`}>
            <h3 className={"font-gilbold text-2xl"}>
                <span>
                #
                </span>
                RUSHAUS</h3>
        </div>

    )
}

export default SplashScreen