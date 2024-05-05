import Image from 'next/image'; // Correct import statement

interface CardProps {
    header: string,
    subHeader: string,
    image: string,
}

const Card = ({ header, subHeader, image }: CardProps) => {
    return (
        <div className='w-3/4 h-1/4 m-5 mb-0 bg-black bg-opacity-70 flex justify-between '>

            <div>

                <h1 className='m-4 text-white text-5xl'>{header}</h1>

                <h6 className='text-white text-sm m-4'>{subHeader}</h6>
            </div>

            <Image
                className=''
                alt="logo"
                src={image}
                width={400}
                height={250}
            />


        </div>
    )
}


const SixthPage = () => {

    return (
        <div className="h-screen relative">
            <video autoPlay muted loop className="absolute inset-0 w-full h-full object-cover">
                <source src="/roadmap-video.mp4" type="video/mp4" />
            </video>
            <main className="relative z-10 h-full flex flex-col items-center justify-center bg-transparent ">
                <Card
                    header="Token"
                    subHeader='Reprehenderit quis adipisicing magna nulla adipisicing culpa tempor. Dolor ad enim id elit tempor nulla est. Sunt sint aute quis commodo est qui consectetur et eiusmod eiusmod occaecat. Exercitation ex sint excepteur nulla. Fugiat quis fugiat fugiat in. Amet culpa elit nisi veniam qui id voluptate dolore sit anim id dolor. Voluptate tempor commodo proident nostrud adipisicing deserunt cupidatat dolor Lorem Lorem quis.'
                    image='/image1.png'
                />
                <Card
                    header="Token"
                    subHeader='Reprehenderit quis adipisicing magna nulla adipisicing culpa tempor. Dolor ad enim id elit tempor nulla est. Sunt sint aute quis commodo est qui consectetur et eiusmod eiusmod occaecat. Exercitation ex sint excepteur nulla. Fugiat quis fugiat fugiat in. Amet culpa elit nisi veniam qui id voluptate dolore sit anim id dolor. Voluptate tempor commodo proident nostrud adipisicing deserunt cupidatat dolor Lorem Lorem quis.'
                    image='/image2.png'
                />
                <Card
                    header="Token"
                    subHeader='Reprehenderit quis adipisicing magna nulla adipisicing culpa tempor. Dolor ad enim id elit tempor nulla est. Sunt sint aute quis commodo est qui consectetur et eiusmod eiusmod occaecat. Exercitation ex sint excepteur nulla. Fugiat quis fugiat fugiat in. Amet culpa elit nisi veniam qui id voluptate dolore sit anim id dolor. Voluptate tempor commodo proident nostrud adipisicing deserunt cupidatat dolor Lorem Lorem quis.'
                    image='/image3.png'
                />
            </main>
        </div>    );
};

export default SixthPage;
