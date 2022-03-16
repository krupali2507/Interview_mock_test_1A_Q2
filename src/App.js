import {Component} from 'react'
import LanguageButton from './components/LanguageButton'
import './App.css'

const languageGreetingsList = [
  {
    id: 'bfdf40eb-eec9-4a66-a493-752fe689f0d0',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/english-greetings-img.png',
    buttonText: 'English',
    imageAltText: 'english',
  },
  {
    id: '0ceda891-2a0c-49e2-8c62-68e78180bac6',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/tamil-greetings-img.png',
    buttonText: 'Tamil',
    imageAltText: 'tamil',
  },
  {
    id: '89537778-7a46-4c58-988c-0adc931d087c',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/telugu-greetings-img.png',
    buttonText: 'Telugu',
    imageAltText: 'telugu',
  },
]

// Replace your code here
class App extends Component {
  state = {
    activeLanguageId: languageGreetingsList[0].id,
  }

  onChangeLanguage = id => {
    this.setState({activeLanguageId: id})
  }

  render() {
    const {activeLanguageId} = this.state
    const activeLanguageDetail = languageGreetingsList.filter(
      eachLanguage => eachLanguage.id === activeLanguageId,
    )
    const {imageUrl, imageAltText} = activeLanguageDetail[0]
    return (
      <div className="bg-container">
        <h1>Multilingual Greetings</h1>
        <ul className="language-button-container">
          {languageGreetingsList.map(eachLanguage => (
            <LanguageButton
              languageDetail={eachLanguage}
              key={eachLanguage.id}
              isActive={activeLanguageId === eachLanguage.id}
              onChangeLanguage={this.onChangeLanguage}
            />
          ))}
        </ul>
        <div>
          <img src={imageUrl} alt={imageAltText} className="image" />
        </div>
      </div>
    )
  }
}

export default App
