import React, {useState,useEffect} from 'react'
import Home from './pages/Home';
import Video from './pages/Video';
import Story from './pages/Story';
import Menu from './pages/Menu';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Footer from './components/Footer';

import './App.css';


function App() {

  const [graph,setGraph] = useState([])
  const [isLoading, setLoading] = useState(true);




  useEffect(()=>{

    const qr = {
      query: "query NewQuery { pages { nodes { pageId slug } } pageHome: pageBy(pageId: 39) { pageId slug home_page { logoImg { mediaItemUrl } } } pageVideo: pageBy(pageId: 120) { pageId slug video_page { videoMobile { mediaItemUrl } videoDesktop { mediaItemUrl } } } pageStory: pageBy(pageId: 199) { pageId slug full_story_page { titleLight titleBold text1 text2 } } pageMenu: pageBy(pageId: 197) { pageId slug menu_page { titleLight titleBold header1 header1About header2 header2About header3 header3About header4 header4About header5 header5About header6 header6About header7 header7About header8 header8About header9 header9About } } pageProjects: pageBy(pageId: 195) { pageId slug project_page { titleLight titleBold } } pageContact: pageBy(pageId: 193) { pageId slug contacts_page { titleLight titleBold pageName pageEmail person1Name person2Name person3Name person1Phone person2Phone person3Phone facebookLink instagramLink linkedinLink copyrights } } posts { nodes { postId tags { edges { node { slug tagId } } } project_post { projectTitle shortDescription linkToPage image { mediaItemUrl } imgAlt } tags { edges { node { id slug tagId } } } } }}"
    }
  fetch('http://localhost/fullAgency/wordpress/gapi',{
      method: 'post',
      headers: {
        'Content-Type':'application/json'
      },
      body: JSON.stringify(qr),
    })
    .then(res => res.json())
    .then(data =>{setGraph(data.data);setLoading(false)})
    .catch((err) => {
      console.log(err);
    });
  },[])



  if(isLoading){return(<div></div>)}
  return (
    
    <>

    
        <Home home={graph.pageHome.home_page.logoImg.mediaItemUrl} pages={graph.pages.nodes}/>
        {/* <Nav pages={graph.pages.nodes}/> */}
        <Video video={graph.pageVideo.video_page}/>
        <Story story={graph.pageStory.full_story_page}/>
        <Menu menu={graph.pageMenu.menu_page}/>
        {graph.pages.nodes.map(page =>{
          if(page.slug === 'projects'){
            return(<Projects key={page.pageId} projectsPage={graph.pageProjects.project_page} projects={graph.posts.nodes}/>)
          }else{return null}
        })}
        {/* <Projects projectsPage={graph.pageProjects.project_page} projects={graph.posts.nodes}/> */}
        <Contact contact={graph.pageContact.contacts_page}/>
        <Footer links={graph.pageContact.contacts_page} />
    </>
  );}


export default App;