import React, { useState, useEffect } from 'react';

const strings = ["Frontend Developer..", "Programmer..", "Learner.."];

export default function Home() {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    let timer;
    const handleTyping = () => {
      const i = loopNum % strings.length;
      const fullText = strings[i];

      if (isDeleting) {
        setText(fullText.substring(0, text.length - 1));
        setTypingSpeed(50);
      } else {
        setText(fullText.substring(0, text.length + 1));
        setTypingSpeed(100);
      }

      if (!isDeleting && text === fullText) {
        timer = setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setTypingSpeed(100);
      } else {
        timer = setTimeout(handleTyping, typingSpeed);
      }
    };

    timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed]);

  return (
    <article className="home active" data-page="home">
      <section id="home" style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', background: 'transparent', color: 'white', textAlign: 'center' }}>
        <h2 style={{ fontSize: '24px', fontWeight: '400' }}>
          I am <span className="typing">{text}</span>
          <span className="typed-cursor" style={{ animation: 'typed-blink 0.7s infinite' }}>|</span>
        </h2>
        <h1 style={{ fontSize: '48px', fontWeight: '700', marginTop: '15px' }}>
          Hi, I am <span style={{ color: '#38bdf8' }}>Vaidehi Hariyani</span>
        </h1>
      </section>
    </article>
  );
}
