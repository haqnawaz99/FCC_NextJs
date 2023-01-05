import Image from 'next/image'


const EventsPage = ({data}) =>{
    return(
        
        <div>
           <h1>It is events main page</h1>

          {data.map((ev) =>(
            <a key={ev.id} href={`/events/${ev.id}`}>
            <Image width={200} height={200}
            alt={ev.title} src={ev.image}/> 
            <h2>{ev.title}</h2>
            </a>
          ))}



            {/* <a href="">
          <img src="" alt="" />
          <h2>Events in London</h2>
          </a>

        <a href="">
          <img src="" alt="" />
          <h2>Events in San Francisco</h2>
          </a>

        <a href="">
          <img src="" alt="" />
          <h2>Events in Barcelona</h2>
          </a> */}
        </div>
    )
}
export default EventsPage ;

export async function getStaticProps() {
  const { events_categories } = await import('/data/data.json');
  return {
    props: {
      data: events_categories,
    },
  };

}