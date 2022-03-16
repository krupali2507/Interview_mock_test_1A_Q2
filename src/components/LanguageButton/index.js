import './index.css'

const LanguageButton = props => {
  const {languageDetail, isActive, onChangeLanguage} = props
  const {id, buttonText} = languageDetail

  const languageBtnClass = isActive ? 'active-btn' : 'inActive-btn'

  const onClickLanguage = () => {
    onChangeLanguage(id)
  }

  return (
    <li className="language">
      <button
        type="button"
        className={languageBtnClass}
        onClick={onClickLanguage}
      >
        {buttonText}
      </button>
    </li>
  )
}

export default LanguageButton
