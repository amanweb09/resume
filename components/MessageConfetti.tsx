interface IConfettiType {
    text: string
}

const MessageConfetti = ({ text }: IConfettiType) => {
    return (
        <div className='bottom-0 absolute'>
            <div
                className="bg-blue-message py-2 px-4 rounded-md shadow-md text-white text-center w-max absolute c1">
                {text}
            </div>
            <div
                className="bg-blue-message py-2 px-4 rounded-md shadow-md text-white text-center w-max absolute c2">
                {text}
            </div>
            <div
                className="bg-blue-message py-2 px-4 rounded-md shadow-md text-white text-center w-max absolute c3">
                {text}
            </div>
            <div
                className="bg-blue-message py-2 px-4 rounded-md shadow-md text-white text-center w-max absolute c4">
                {text}
            </div>
            <div
                className="bg-blue-message py-2 px-4 rounded-md shadow-md text-white text-center w-max absolute c5">
                {text}
            </div>
            <div
                className="bg-blue-message py-2 px-4 rounded-md shadow-md text-white text-center w-max absolute c6">
                {text}
            </div>
            <div
                className="bg-blue-message py-2 px-4 rounded-md shadow-md text-white text-center w-max absolute c7">
                {text}
            </div>
            
        </div>
    )
}

export default MessageConfetti