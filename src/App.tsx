import './App.css'

function App() {
    function getRandomInt(min: number, max: number) {
        min = Math.ceil(min)
        max = Math.floor(max)
        return Math.floor(Math.random() * (max - min + 1) + min)
    }

    function onClickEvent(type: boolean) {
        if (type) {
            const btnYes = document.querySelector(
                'button:nth-child(1)'
            ) as HTMLButtonElement
            const btnNo = document.querySelector(
                'button:nth-child(2)'
            ) as HTMLButtonElement
            const parent = document.querySelector('.buttons') as HTMLDivElement
            parent.removeChild(btnYes)
            parent.removeChild(btnNo)
            const text = document.querySelector('h1') as HTMLHeadingElement
            text.innerHTML = 'I love you too!'
            const main = document.querySelector('.main') as HTMLDivElement
            main.style.height = '15rem'
            let heart = document.querySelector('img') as HTMLImageElement
            heart.style.opacity = '1'
            for (let i = 1; i <= hearts.length; i++) {
                heart = document.querySelector(
                    `img:nth-child(${i + 1})`
                ) as HTMLImageElement
                heart.style.opacity = '1'
            }
        } else {
            const btn = document.querySelector(
                'button:nth-child(2)'
            ) as HTMLButtonElement
            const x = getRandomInt(-20, 20)
            const y = getRandomInt(-20, 20)
            btn.style.transform = `translate(${x}rem, ${y}rem)`
        }
    }

    const hearts: number[] = []
    const random = getRandomInt(5, 25)

    for (let i = 0; i < random; i++) {
        hearts.push(i)
    }

    return (
        <>
            <div className='main'>
                <h1>Do you love me?</h1>
                <div className='buttons'>
                    <button onClick={() => onClickEvent(true)}>Yes</button>
                    <button onClick={() => onClickEvent(false)}>No</button>
                </div>
            </div>
            {hearts.map((i) => {
                return (
                    <img
                        src='./heart.png'
                        style={{
                            width: `${getRandomInt(5, 20)}rem`,
                            transform: `translate(
                            ${getRandomInt(-20, 50)}rem, 
                            ${getRandomInt(-30, 10)}rem`,
                        }}
                        alt='heart'
                        key={i}
                    />
                )
            })}
        </>
    )
}

export default App
