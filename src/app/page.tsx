import Image from 'next/image'
import { Metadata } from 'next'
import Header from './components/Header'
 
export const metadata: Metadata = {
  title: "Edson's Portfolio",
}

// Note: Sonny uses nextjs version (12.3.0) as opposed to my nextjs version (13.4.12)
// Which is why the folder structure (and other small stuff) is slightly different

// VsCode Extensions:
// TailwindCSS intellisense
// ES7+ react extension

export default function Home() {
  return (
    <div>
    
      {/* Header */}
      <Header/>
      {/* Hero */}

      {/* About */}

      {/* Experience */}

      {/* Skills */}

      {/* Projects */}

      {/* Contact Me */}

    </div>

  )
}
