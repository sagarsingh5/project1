import Image from 'next/image';

interface CardProps {
    header: string,
    subHeader: string,
    image: string,
    content: string,
    comingSoon?: boolean
}

const Card = ({ header, subHeader, image, content, comingSoon }: CardProps) => {
    return (
        <div className='relative w-1/4 h-3/4 m-5 bg-gray-950'>
            <h1 className='m-4 text-white text-5xl'>{header}</h1>

            <h6 className='m-4 bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text text-sm font-bold uppercase py-4'>{subHeader}</h6>

            <Image
                className='mt-4'
                alt="logo"
                src={image}
                width={400}
                height={250}
            />

            <p className='m-4 text-white'>{content}</p>
            
            {comingSoon && 
                <div className='absolute bg-white rounded-3xl -top-4 right-5 p-1 z-10'>
                    <p className='text-black uppercase'>Coming Soon</p>
                </div>
            }
        </div>
    )
}

const FifthPage = () => {

    return (
        <main className="h-screen flex items-center justify-center bg-black ">
            <Card
                header="Token"
                subHeader='The Gateway Token to the world of AI'
                image='/image1.png'
                content='Velit aliqua adipisicing amet nostrud voluptate non occaecat aliquip eiusmod nisi nulla ea Lorem. Nisi consectetur ex aliquip commodo tempor. Nulla nostrud qui esse deserunt nulla incididunt veniam in.'
                comingSoon
            />
            <Card
                header="Token"
                subHeader='The Gateway Token to the world of AI'
                image='/image2.png'
                content='Velit aliqua adipisicing amet nostrud voluptate non occaecat aliquip eiusmod nisi nulla ea Lorem. Nisi consectetur ex aliquip commodo tempor. Nulla nostrud qui esse deserunt nulla incididunt veniam in.'
                comingSoon
            />
            <Card
                header="Token"
                subHeader='The Gateway Token to the world of AI'
                image='/image3.png'
                content='Velit aliqua adipisicing amet nostrud voluptate non occaecat aliquip eiusmod nisi nulla ea Lorem. Nisi consectetur ex aliquip commodo tempor. Nulla nostrud qui esse deserunt nulla incididunt veniam in.'
                comingSoon
            />
        </main>
    );
};

export default FifthPage;
