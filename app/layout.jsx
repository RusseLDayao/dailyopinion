import '@styles/global.css';
import { Children } from 'react';

export const metadata= {
    title: "Daily Opinion",
    description: "Share your thoughs on our current events world wide with anyone"
}

const layout = (Children) => {
  return (
    <html lang='en'>
        <body>
            <div className='main'>
                <div className='gradient'/>
            </div>
            <main className='app'>
                {Children}
            </main>
        </body>
    </html>
  )
}

export default RootLayout;