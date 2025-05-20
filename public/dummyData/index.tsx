import image_1 from '../assets/b-gl1.jpg';
import image_2 from '../assets/b-gl2.jpg';
import image_3 from '../assets/b-gl3.jpg';
import image_4 from '../assets/b-gl4.jpg';
import image_5 from '../assets/b-gl5.jpg';
import image_6 from '../assets/b-gl6.jpg';
import image_7 from '../assets/b-gl7.jpg';
import image_8 from '../assets/b-gl8.jpg';

import {
  BlogIcon,
  ClockIcon,
  FeedbackIcon,
  MobileAboutIcon,
  MobileContactIcon,
  MobileGalleryIcon,
  MobileHomeIcon,
  MobileMenuIcon,
  MobileOfferIcon,
  ReservationIcon
} from './Icons';

export const testimonials = [
  { id: 'testimonial_1', imageSource: image_1, imageDescription: 'testimonial image 1' },
  { id: 'testimonial_2', imageSource: image_1, imageDescription: 'testimonial image 2' },
  { id: 'testimonial_3', imageSource: image_1, imageDescription: 'testimonial image 3' },
  { id: 'testimonial_4', imageSource: image_1, imageDescription: 'testimonial image 4' },
  { id: 'testimonial_5', imageSource: image_1, imageDescription: 'testimonial image 5' },
  { id: 'testimonial_6', imageSource: image_1, imageDescription: 'testimonial image 6' },
  { id: 'testimonial_7', imageSource: image_1, imageDescription: 'testimonial image 7' }
];
export const galleryData = [
  { id: 'gallery_1', imageSource: image_1, imageDescription: 'gallery image 1', height: 200 },
  { id: 'gallery_2', imageSource: image_2, imageDescription: 'gallery image 2', height: 370 },
  { id: 'gallery_3', imageSource: image_3, imageDescription: 'gallery image 3', height: 200 },
  { id: 'gallery_4', imageSource: image_4, imageDescription: 'gallery image 4', height: 370 },
  { id: 'gallery_5', imageSource: image_5, imageDescription: 'gallery image 5', height: 200 },
  { id: 'gallery_6', imageSource: image_6, imageDescription: 'gallery image 6', height: 200 },
  { id: 'gallery_7', imageSource: image_7, imageDescription: 'gallery image 7', height: 370 },
  { id: 'gallery_8', imageSource: image_8, imageDescription: 'gallery image 8', height: 200 },
  { id: 'gallery_9', imageSource: image_3, imageDescription: 'gallery image 9', height: 200 }
];
export const navigationList = [
  { path: 'home', icon: <MobileHomeIcon /> },
  { path: 'about', icon: <MobileAboutIcon /> },
  { path: 'special', icon: <MobileOfferIcon /> },
  { path: 'menu', icon: <MobileMenuIcon /> },
  { path: 'gallery', icon: <MobileGalleryIcon /> },
  { path: 'opening', icon: <ClockIcon /> },
  { path: 'reservation', icon: <ReservationIcon /> },
  { path: 'feedback', icon: <FeedbackIcon /> },
  { path: 'blogs', icon: <BlogIcon /> },
  { path: 'contact', icon: <MobileContactIcon /> }
];
export const offersList = [
  {
    id: 'offer_1',
    imageSource: image_1,
    imageDescription: 'offer image 1'
  },
  {
    id: 'offer_2',
    imageSource: image_2,
    imageDescription: 'offer image 2'
  },
  {
    id: 'offer_3',
    imageSource: image_3,
    imageDescription: 'offer image 3'
  }
];
export const menuList = [
  {
    imageSource: image_1,
    imageDescription: 'menu image 1',
    id: 'menu_1',
    price: 18.99
  },
  {
    imageSource: image_2,
    imageDescription: 'menu image 2',
    price: 18.99,
    id: 'menu_2'
  },
  {
    imageSource: image_3,
    imageDescription: 'menu image 3',
    id: 'menu_3',
    price: 18.99
  },
  {
    imageSource: image_4,
    imageDescription: 'menu image 4',
    id: 'menu_4',
    price: 18.99
  },
  {
    imageSource: image_5,
    imageDescription: 'menu image 5',
    id: 'menu_5',
    price: 18.99
  },
  {
    imageSource: image_6,
    imageDescription: 'menu image 6',
    id: 'menu_6',
    price: 18.99
  },
  {
    imageSource: image_7,
    imageDescription: 'menu image 7',
    id: 'menu_7',
    price: 18.99
  },
  {
    imageSource: image_8,
    imageDescription: 'menu image 8',
    id: 'menu_8',
    price: 16.99
  },
  {
    imageSource: image_2,
    imageDescription: 'menu image 9',
    id: 'menu_9',
    price: 24.99
  }
];
export const blogsList = [
  {
    id: 'blog_1',
    imageSource: image_1,
    imageDescription: 'gallery image 1'
  },
  {
    id: 'blog_2',
    imageSource: image_2,
    imageDescription: 'gallery image 2'
  },
  {
    id: 'blog_3',
    imageSource: image_3,
    imageDescription: 'gallery image 3'
  }
];
