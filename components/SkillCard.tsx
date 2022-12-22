
interface IPropTypes {
    icon: string,
    text: string
}

const SkillCard = ({text, icon, ...rest}: IPropTypes) => {
  return (
    <div {...rest} className="flex items-center mb-4">
      
          <img 
                className="w-12"
                src={icon} 
                alt="skill" />

        <p className="ml-6">{text}</p>
    </div>
  )
}

export default SkillCard