import { ReactNode } from "react";
import SingleHeroCarouselPicture from "../SingleHeroCarouselPicture";
import SingleHeroCarouselVideo from "../SingleHeroCarouselVideo";
import SingleHeroDescription from "../SingleHeroDescription";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { changeTabsValue } from "../../../store/reducers/heros";
import { IHeros } from "../../../types";

interface props {
  hero:IHeros | null
}

export default function Tabs({hero}:props) {
  
    const dispatch = useAppDispatch();
    const tabsValueActive = useAppSelector((state)=> state.heros.tabsValueActive)
    
    const hiddenDescription = tabsValueActive !== "description" ? "hidden" : "" ;
    const hiddenImages = tabsValueActive !== "images" ? "hidden" : "";
    const hiddenVideos = tabsValueActive !== "videos" ? "hidden" : "";

    
    const titleTab = ["description", "images", "videos"].map((t, i) => {
      let title = "";
        if(t=="description") {
            title="Description"
        } else if(t=="images") {
            title="Images"
        } else if (t=="videos") {
            title="Vidéos"
        } 
        return (
            <li key={i} className="me-2" role="presentation">
                <button className="inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                        id={`${t}-tab`}
                        data-tabs-target={`#${t}`}
                        type="button"
                        role="tab"
                        aria-controls={`${t}`}
                        aria-selected="false"
                        onClick={() => dispatch(changeTabsValue(t))}
                        >
                {title}
                </button>
          </li>
        );
    });


    function contentTab(titre:string, visible:string, composant:ReactNode):ReactNode {      
        return (
          <div
            className={`${visible} p-4 rounded-lg bg-gray-50 dark:bg-gray-800`}
            id={`${titre}`}
            role="tabpanel"
            aria-labelledby={`${titre}-tab`}
          >
            <div className="text-sm text-gray-500 text-justify dark:text-gray-400">
              {composant}
            </div>
          </div>
        );
    }

  return (
    <>
      <h2 className='text-2xl font-bold mt-9'>Caractéristiques du héro</h2>
      <div className='w-full border-4'></div>

      <div className="mb-4 border-b border-gray-200 dark:border-gray-700">
        <ul
          className="flex flex-wrap -mb-px text-sm font-medium text-center"
          id="default-tab"
          data-tabs-toggle="#default-tab-content"
          role="tablist"
        >
            {titleTab}

        </ul>
      </div>

      <div id="default-tab-content">

        {contentTab("description", hiddenDescription, <SingleHeroDescription content={hero?.story} />)}
        {contentTab("images", hiddenImages, <SingleHeroCarouselPicture list={hero?.picture} />)}
        {contentTab("videos", hiddenVideos, <SingleHeroCarouselVideo list={hero?.video} />)}

      </div>
    </>
  );
}
