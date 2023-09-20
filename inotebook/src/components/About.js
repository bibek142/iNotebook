import React from 'react'


const About = () => {
  return (
    <>
      <div className="accordion" id="accordionExample">
        <h1 className='my-3 align'>About iNotebook</h1>
        <div className="accordion-item" >
          <h2 className="accordion-header">
            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              Introduction
            </button>
          </h2>
          <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              Welcome to iNotebook, your digital notepad in the cloud. We are more than just a platform for taking notes; we are your companion for storing, organizing, and accessing your notes securely from anywhere in the world. iNotebook simplifies note-taking and makes your ideas, thoughts, and inspirations accessible at your fingertips.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              Our Mission
            </button>
          </h2>
          <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              Our mission at iNotebook is to empower you with a seamless and convenient way to store, manage, and retrieve your notes. We understand that your notes are your valuable assets, and we are committed to providing you with a secure, user-friendly, and feature-rich platform for note-taking and organization.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              What we offer:
            </button>
          </h2>
          <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              <div className='my-2'>1. Secure Cloud Storage: Your notes are safely stored in the cloud, ensuring that you can access them anytime, anywhere, from any device. Say goodbye to the fear of losing important notes.</div>

              <div className='my-2'>2. User-Friendly Interface: iNotebook offers an intuitive and easy-to-use interface, making it simple to create, edit, and organize your notes. Whether you're a student, professional, or creative thinker, our platform is designed for you.</div>

              <div className='my-2'>3. Cross-Platform Compatibility: Seamlessly switch between devices with our cross-platform compatibility. Access your notes on your computer, tablet, or smartphone, and your changes will sync in real-time.</div>

              <div className='my-2'>4. Customizable Organization: Create notebooks, folders, and tags to keep your notes neatly organized. Our platform adapts to your organizational style, ensuring that you can find what you need when you need it.</div>

              <div className='my-2'>5. Privacy and Security: We take your privacy seriously. Your notes are encrypted and protected with state-of-the-art security measures. Your data is yours alone.</div>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              Join Our Community
            </button>
          </h2>
          <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              We believe in the collaborative power of knowledge and ideas. Join the iNotebook community to connect with like-minded individuals who are passionate about efficient note-taking and organization. Share your tips, tricks, and experiences, and learn from others to enhance your note-taking skills.
              <div>
              Signing up is quick and easy. Become a part of our growing community today and experience the convenience and security of iNotebook.</div>
            </div>
          </div>
        </div>
        <h6 className='my-3 mx-3'>Thank you for choosing iNotebook as your digital note-taking companion. Together, we'll organize ideas, enhance productivity, and ensure that your notes are always just a click away. Welcome to a smarter way to take notes.</h6>
      </div>
    </>
  )
}

export default About
