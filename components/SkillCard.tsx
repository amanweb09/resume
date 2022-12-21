
interface IPropTypes {
    icon: string,
    text: string
}

const SkillCard = ({text, icon}: IPropTypes) => {
  return (
    <div className="flex items-center mb-4">
        
        {/* <div className="w-20  bg-dark-head shadow-md rounded-full flex-center">
          
        </div> */}
          <img 
                className="w-12"
                src={icon} 
                alt="skill" />

        <p className="ml-6">{text}</p>
    </div>
  )
}

export default SkillCard