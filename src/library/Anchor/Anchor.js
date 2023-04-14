import { Anchor } from 'antd';
import React, { useEffect, useState } from 'react';
// import Anchor from "./index"
// import Link from "./Link"
let number = ""
const { Link } = Anchor;
const onChange = (link) => {
    console.log('Anchor:OnChange', link);
};

function Index() {


    return (
        <>
            <Anchor affix={false} onChange={onChange}  >
                <Link className=' hover:text-blue-500' href="#section1" title="Section 1" />
                <Link className=' hover:text-blue-500' href="#section2" title="Section 2" />
                <Link className=' hover:text-blue-500' href="#section3" title="Section 3" />
                <Link className=' hover:text-blue-500' href="#section4" title="Section 4" />
            </Anchor>
            <div class="section one" id="section1">
                <h1>
                    section 1
                </h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae tempus quam pellentesque nec nam. Tincidunt id aliquet risus feugiat. Hac habitasse platea dictumst vestibulum rhoncus est pellentesque. Ante in nibh mauris cursus mattis molestie a iaculis at. Condimentum lacinia quis vel eros donec. Egestas sed tempus urna et pharetra pharetra. Fusce ut placerat orci nulla pellentesque dignissim enim sit. At risus viverra adipiscing at. Neque ornare aenean euismod elementum nisi quis eleifend quam. Ac tincidunt vitae semper quis lectus nulla at volutpat. Pulvinar sapien et ligula ullamcorper. Velit laoreet id donec ultrices tincidunt arcu non sodales neque. Felis eget velit aliquet sagittis id consectetur purus ut faucibus. Eu turpis egestas pretium aenean pharetra. Pulvinar pellentesque habitant morbi tristique senectus. Eu feugiat pretium nibh ipsum consequat nisl vel pretium lectus. Tristique nulla aliquet enim tortor at.
                </p>
            </div>
            <div class="section two" id="section2">
                <h1>
                    section 2
                </h1>
                <p>
                    Felis eget nunc lobortis mattis aliquam faucibus. Sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula. Lacus sed turpis tincidunt id aliquet. Purus semper eget duis at tellus. Velit laoreet id donec ultrices. Sed adipiscing diam donec adipiscing tristique risus nec feugiat in. Enim diam vulputate ut pharetra sit amet aliquam id. Scelerisque mauris pellentesque pulvinar pellentesque habitant. Phasellus faucibus scelerisque eleifend donec pretium vulputate sapien. Nam at lectus urna duis convallis convallis tellus. Sapien nec sagittis aliquam malesuada bibendum arcu vitae elementum curabitur. Dolor morbi non arcu risus quis varius quam quisque. Lobortis feugiat vivamus at augue eget arcu dictum varius duis. In hac habitasse platea dictumst quisque sagittis purus. Lectus nulla at volutpat diam ut venenatis. Justo eget magna fermentum iaculis eu. Pharetra et ultrices neque ornare aenean euismod. Scelerisque fermentum dui faucibus in ornare quam viverra.
                </p>
            </div>
            <div class="section three" id="section3">
                <h1>
                    section 3
                </h1>
                <p>
                    Felis eget nunc lobortis mattis aliquam faucibus. Sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula. Lacus sed turpis tincidunt id aliquet. Purus semper eget duis at tellus. Velit laoreet id donec ultrices. Sed adipiscing diam donec adipiscing tristique risus nec feugiat in. Enim diam vulputate ut pharetra sit amet aliquam id. Scelerisque mauris pellentesque pulvinar pellentesque habitant. Phasellus faucibus scelerisque eleifend donec pretium vulputate sapien. Nam at lectus urna duis convallis convallis tellus. Sapien nec sagittis aliquam malesuada bibendum arcu vitae elementum curabitur. Dolor morbi non arcu risus quis varius quam quisque. Lobortis feugiat vivamus at augue eget arcu dictum varius duis. In hac habitasse platea dictumst quisque sagittis purus. Lectus nulla at volutpat diam ut venenatis. Justo eget magna fermentum iaculis eu. Pharetra et ultrices neque ornare aenean euismod. Scelerisque fermentum dui faucibus in ornare quam viverra.
                </p>
            </div>
            {/* <div class="section four" id="section4">
                <h1>
                    section 4
                </h1>
                <p>
                    Felis eget nunc lobortis mattis aliquam faucibus. Sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula. Lacus sed turpis tincidunt id aliquet. Purus semper eget duis at tellus. Velit laoreet id donec ultrices. Sed adipiscing diam donec adipiscing tristique risus nec feugiat in. Enim diam vulputate ut pharetra sit amet aliquam id. Scelerisque mauris pellentesque pulvinar pellentesque habitant. Phasellus faucibus scelerisque eleifend donec pretium vulputate sapien. Nam at lectus urna duis convallis convallis tellus. Sapien nec sagittis aliquam malesuada bibendum arcu vitae elementum curabitur. Dolor morbi non arcu risus quis varius quam quisque. Lobortis feugiat vivamus at augue eget arcu dictum varius duis. In hac habitasse platea dictumst quisque sagittis purus. Lectus nulla at volutpat diam ut venenatis. Justo eget magna fermentum iaculis eu. Pharetra et ultrices neque ornare aenean euismod. Scelerisque fermentum dui faucibus in ornare quam viverra.
                </p>
            </div> */}
            <div class="section one" id="section1">
                <h1>
                    section 1
                </h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae tempus quam pellentesque nec nam. Tincidunt id aliquet risus feugiat. Hac habitasse platea dictumst vestibulum rhoncus est pellentesque. Ante in nibh mauris cursus mattis molestie a iaculis at. Condimentum lacinia quis vel eros donec. Egestas sed tempus urna et pharetra pharetra. Fusce ut placerat orci nulla pellentesque dignissim enim sit. At risus viverra adipiscing at. Neque ornare aenean euismod elementum nisi quis eleifend quam. Ac tincidunt vitae semper quis lectus nulla at volutpat. Pulvinar sapien et ligula ullamcorper. Velit laoreet id donec ultrices tincidunt arcu non sodales neque. Felis eget velit aliquet sagittis id consectetur purus ut faucibus. Eu turpis egestas pretium aenean pharetra. Pulvinar pellentesque habitant morbi tristique senectus. Eu feugiat pretium nibh ipsum consequat nisl vel pretium lectus. Tristique nulla aliquet enim tortor at.
                </p>
            </div>
            <div class="section one" id="section1">
                <h1>
                    section 1
                </h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae tempus quam pellentesque nec nam. Tincidunt id aliquet risus feugiat. Hac habitasse platea dictumst vestibulum rhoncus est pellentesque. Ante in nibh mauris cursus mattis molestie a iaculis at. Condimentum lacinia quis vel eros donec. Egestas sed tempus urna et pharetra pharetra. Fusce ut placerat orci nulla pellentesque dignissim enim sit. At risus viverra adipiscing at. Neque ornare aenean euismod elementum nisi quis eleifend quam. Ac tincidunt vitae semper quis lectus nulla at volutpat. Pulvinar sapien et ligula ullamcorper. Velit laoreet id donec ultrices tincidunt arcu non sodales neque. Felis eget velit aliquet sagittis id consectetur purus ut faucibus. Eu turpis egestas pretium aenean pharetra. Pulvinar pellentesque habitant morbi tristique senectus. Eu feugiat pretium nibh ipsum consequat nisl vel pretium lectus. Tristique nulla aliquet enim tortor at.
                </p>
            </div>
            <div class="section one" id="section1">
                <h1>
                    section 1
                </h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae tempus quam pellentesque nec nam. Tincidunt id aliquet risus feugiat. Hac habitasse platea dictumst vestibulum rhoncus est pellentesque. Ante in nibh mauris cursus mattis molestie a iaculis at. Condimentum lacinia quis vel eros donec. Egestas sed tempus urna et pharetra pharetra. Fusce ut placerat orci nulla pellentesque dignissim enim sit. At risus viverra adipiscing at. Neque ornare aenean euismod elementum nisi quis eleifend quam. Ac tincidunt vitae semper quis lectus nulla at volutpat. Pulvinar sapien et ligula ullamcorper. Velit laoreet id donec ultrices tincidunt arcu non sodales neque. Felis eget velit aliquet sagittis id consectetur purus ut faucibus. Eu turpis egestas pretium aenean pharetra. Pulvinar pellentesque habitant morbi tristique senectus. Eu feugiat pretium nibh ipsum consequat nisl vel pretium lectus. Tristique nulla aliquet enim tortor at.
                </p>
            </div>
            <div class="section one" id="section4">
                <h1>
                    section 4
                </h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae tempus quam pellentesque nec nam. Tincidunt id aliquet risus feugiat. Hac habitasse platea dictumst vestibulum rhoncus est pellentesque. Ante in nibh mauris cursus mattis molestie a iaculis at. Condimentum lacinia quis vel eros donec. Egestas sed tempus urna et pharetra pharetra. Fusce ut placerat orci nulla pellentesque dignissim enim sit. At risus viverra adipiscing at. Neque ornare aenean euismod elementum nisi quis eleifend quam. Ac tincidunt vitae semper quis lectus nulla at volutpat. Pulvinar sapien et ligula ullamcorper. Velit laoreet id donec ultrices tincidunt arcu non sodales neque. Felis eget velit aliquet sagittis id consectetur purus ut faucibus. Eu turpis egestas pretium aenean pharetra. Pulvinar pellentesque habitant morbi tristique senectus. Eu feugiat pretium nibh ipsum consequat nisl vel pretium lectus. Tristique nulla aliquet enim tortor at.
                </p>
            </div>
        </>
    );
}

export default Index;
