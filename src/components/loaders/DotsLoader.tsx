import './dots.css'

interface Props {
  small?: boolean
}

const DotsLoader = (props: Props) => {
  return (
    <div className={props.small ? 'loader_dots_small' : 'loader_dots'}></div>
  )
}

export default DotsLoader
