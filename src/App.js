import './App.scss';
import React, {useState} from 'react';
import Reactmarkdown from 'react-markdown';

const defaultMarkdown = 

`# Welcome to my React Markdown Previewer!
## This is a sub-heading...
### And here's some other cool stuff:
Heres some code, \`<div></div>\`, between 2 backticks.
\`\`\`
// this is multi-line code:
function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`
You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.
There's also [links](https://www.freecodecamp.com), and
> Block Quotes!
And if you want to get really crazy, even tables:
| Wild Header | Crazy Header | Another Header? |
| ------------ | ------------- | --------------- |
| Your content can | be here, and it | can be here.... |
And of course there are lists.
- And there are numbererd lists too.
1. Use just 1s if you want!
1. But the list goes on...
- Even if you use dashes or asterisks.
* And last but not least, let's not forget embedded images:
![React Logo w/ Text](https://goo.gl/Umyytc)
`;


function App() {
  const [input, setInput] = useState(defaultMarkdown);


  return (
    <div className="App">
      <header className="App-header">
        <textarea id="editor" value={input} onChange={(e) => setInput(e.target.value)}>
        </textarea>
        <div id="preview">
          <Reactmarkdown>{input}</Reactmarkdown>
        </div>

      </header>
    </div>
  );
}

export default App;
