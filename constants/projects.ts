import { IProjectTypes } from "../types"
import { technologies } from "./technologies"

const {react, nodejs, tailwind, mongodb} = technologies

export const projects: IProjectTypes[] = [
    {
        title: 'Social Buzz - A Social Media App',
        image: '',
        stack: [react, nodejs, mongodb, tailwind],
        githubLink: ''
    }
]