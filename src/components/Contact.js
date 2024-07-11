// src/components/Contacts.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAt, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import {
    faTwitter,
    faLinkedinIn,
    faGithub,
    faInstagram,
    faMediumM,
    faFacebook
} from '@fortawesome/free-brands-svg-icons';
import '../theme/Contact.css';
const Contacts = () => {
    const contactsData = {
        email: 'lavkalsi@gmail.com',
        phone: '+91 9056447060',
        address: 'Punjab, India',
    };

    const socialsData = {
        twitter: 'https://x.com/KalsiLav',
        linkedIn: 'https://www.linkedin.com/in/lavkalsi/',
        github: 'https://github.com/LavKalsi',
        instagram: 'https://www.instagram.com/lavkalsi/',
        medium: 'https://medium.com/@lavkalsi',
        facebook: 'https://www.facebook.com/profile.php?id=100009068224498'
    };

    return (
        <div className='contacts' id='contacts'>
            <div className='contacts--container'>
                <h1>Contacts</h1>
                <div className='contacts-body'>
                    <div className='contacts-details'>
                        <a href={`mailto:${contactsData.email}`} className='personal-details'>
                            <div className='details-icon'>
                                <FontAwesomeIcon icon={faAt} />
                            </div>
                            <p>{contactsData.email}</p>
                        </a>
                        <a href={`tel:${contactsData.phone}`} className='personal-details'>
                            <div className='details-icon'>
                                <FontAwesomeIcon icon={faPhone} />
                            </div>
                            <p>{contactsData.phone}</p>
                        </a>
                        <div className='personal-details'>
                            <div className='details-icon'>
                                <FontAwesomeIcon icon={faMapMarkerAlt} />
                            </div>
                            <p>{contactsData.address}</p>
                        </div>
                        <div className='socialmedia-icons'>
                            {socialsData.twitter && renderSocialIcon(faTwitter, socialsData.twitter)}
                            {socialsData.github && renderSocialIcon(faGithub, socialsData.github)}
                            {socialsData.linkedIn && renderSocialIcon(faLinkedinIn, socialsData.linkedIn)}
                            {socialsData.instagram && renderSocialIcon(faInstagram, socialsData.instagram)}
                            {socialsData.medium && renderSocialIcon(faMediumM, socialsData.medium)}
                            {socialsData.facebook && renderSocialIcon(faFacebook, socialsData.facebook)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const renderSocialIcon = (icon, link) => (
    <a href={link} target='_blank' rel='noreferrer' className='social-icon'>
        <FontAwesomeIcon icon={icon} aria-hidden="true" />
    </a>
);

export default Contacts;
