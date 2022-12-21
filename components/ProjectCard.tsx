import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline"
import { IProjectTypes } from "../types"


const ProjectCard = ({ title, image, githubLink, stack }: IProjectTypes) => {
    return (
        <div className="px-4 py-6">
            <a
                href="#"
                className="text-lg font-bold hover:text-green-custom mb-4 block flex items-center">
                {title}
                <ArrowTopRightOnSquareIcon className="w-5 h-5 dark:text-gray-200 text-gray-600 ml-2 cursor-pointer" />
            </a>
            <img
                className="w-full border-green-custom"
                src={image}
                alt="project image" />

            <div className="flex items-center my-6 py-4">
                {
                    stack.map((tech, ix) => {
                        return (
                            <div
                                key={ix}
                                className="">
                                <img
                                    className="mx-4"
                                    src={tech}
                                    alt="tech" />
                            </div>
                        )
                    })
                }
            </div>
            <a href={githubLink}>
                <div className="w-14 flex-center h-10 rounded-full bg-white">
                    <img className="h-10" src="/images/github.png" alt="github link" />
                </div>
            </a>
        </div>
    )
}

export default ProjectCard