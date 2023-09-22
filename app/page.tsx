import Image from 'next/image'
import styles from './page.module.css'
import index from './styles/index.module.css'
// import components1 from './components/components1'
import Component1 from './components/components1';
import Component2 from './components/components2';
import Components3 from './components/components3';
import Components4 from './components/components4';
import Components5 from './components/components5';
import Components6 from './components/components6';
import Components7 from './components/components7';

const tags = [
  {  svg:'/SbgSystems.svg',dec:'SBG SYSTEMS'},
  { svg:'/Seabots.svg',dec:'GPA SEABOTS'},
  {  svg:'/Hemisphere.svg',dec:'HEMISPHERE'},
];

export default function Home() {
  return (
    <div className={styles.main}>
      <Component1></Component1>
      <Component2></Component2>
      <Components3 characterId='1'></Components3>
      <Components4></Components4>
       <div className={index.imgProunp}>
              {tags.map((tag, i) => (
               <div>
                 <div key={i}  className={index.libox}>
                    <Image
                      src={tag.svg}
                      alt="Picture of the author"
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{ width: '100%', height: '100%',fontSize: '0'}}
                    />
                </div>
                <div className={index.imgProunpText}>
                  {tag.dec}
                </div>
               </div>
              ))}
       </div>
       <Components5></Components5>
       <Components6></Components6>
       <Components7></Components7>
       
    </div>
  )
}
