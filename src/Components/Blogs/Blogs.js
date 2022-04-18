import React from 'react';

const Blogs = () => {
    return (
        <div>
            <div>
                <h1 className='text-5xl font-bold bg-gray-400 w-fit mx-auto p-4 mt-10'>Question & Answering Section</h1>
            </div>
            <div  className='grid grid-cols-1 md:grid-cols-3 gap-4 mt-12  rounded-2xl p-5'>
                <div  className='w-full shadow-xl'>
                    <h2 className='bg-black text-orange-500 text-2xl font-bold mb-5 p-3'>Difference Between Authorization and Authentication ??</h2>
                    <img src="https://blog.miniorange.com/wp-content/uploads/sites/19/2021/11/authentication-vs-authorization.webp" alt="" />

                    <h3 className='text-2xl font-bold mt-5'>Authentication:</h3>
                    <ul className='font-serif mt-5'>
                        <li>Authentication verifies who the user is.</li>
                        <li>Authentication is the first step of a good identity and access management process.</li>
                        <li>Authentication is visible to and partially changeable by the user.</li>
                        <li>Example: By verifying their identity, employees can gain access to an HR application that includes their personal pay information, vacation time, and 401K data.</li>
                    </ul>
                    <h3 className='text-2xl font-bold mt-5'>Authentication:</h3>
                    <ul className='font-serif mt-5'>
                        <li>Authorization determines what resources a user can access.</li>
                        <li>Authorization always takes place after authentication.</li>
                        <li>Authorization isn’t visible to or changeable by the user.</li>
                        <li>Example: Once their level of access is authorized, employees and HR managers can access different levels of data based on the permissions set by the organization.</li>
                    </ul>
                </div>
                <div>
                    <h2 className='bg-black text-orange-500 text-2xl font-bold mb-5 p-3'> Why are you using firebase? What other options do you have to implement authentication?</h2>
                    <img src="https://areknawo.com/content/images/2020/08/cover-1.png" alt="" />

                    <h3 className='text-2xl font-bold mt-5'>Firebase: </h3>
                    <p>Owned by Google, Firebase is a complete package of products that allows to build web and mobile apps, improve the app quality and help your clients grow their business.</p>
                    <p>Indeed, Firebase is a less technical and time-saving alternative to writing full-fledged backend code for dynamic apps.

                    You might also want to consider leveraging this tool if you eventually wish to host and manage your app in the cloud. Being serverless, Firebase removes the need to worry about the technicalities of cloud server configuration.</p>

                    <h3 className='text-2xl font-bold mt-5'>Implement Authentication: </h3>
                    <p>Authentication is used by a server when the server needs to know exactly who is accessing their information or site.
                    Authentication is used by a client when the client needs to know that the server is system it claims to be.
                    In authentication, the user or computer has to prove its identity to the server or client.
                    Usually, authentication by a server entails the use of a user name and password. Other ways to authenticate can be through cards, retina scans, voice recognition, and fingerprints.
                    Authentication by a client usually involves the server giving a certificate to the client in which a trusted third party such as Verisign or Thawte states that the server belongs to the entity (such as a bank) that the client expects it to</p>

                </div>

                <div>
                    <h2 className='bg-black text-orange-500 text-2xl font-bold mb-5 p-3'>What other services does firebase provide other than authentication ?</h2>
                    <img src="https://bs-uploads.toptal.io/blackfish-uploads/components/blog_post_page/content/cover_image_file/cover_image/885818/regular_800x320_staging.toptal.net_firebase_role-based-firebase-authentication-826a632143cf2f34949096059f93cff1.png" alt="" />

                    <h3 className='text-2xl font-bold mt-5'> firebase provide services other than authentication: </h3>
                    <p>Firebase, developers don’t need to worry about the backend programming, Authentication, API development, database (real-time cloud-hosted NoSQL database and cloud firestore), File storage, etc. Firebase provides all the services with very efficient and fast performance.</p>

                    <ul className='font-serif mt-5'>
                        <li>Cloud Firestore </li>
                        <li>Cloud Functions</li>
                        <li>Authentication</li>
                        <li>Hosting</li>
                        <li>Cloud Storage</li>
                        <li>Google Analytics</li>
                        <li>Cloud Messaging</li>
                        <li>Dynamic Links</li>
                        <li>Remote Config</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Blogs;