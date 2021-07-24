import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const AdminSidebarData = [
  {
    title: 'Manage User',
    path: '/admin/users',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'Course',
    path: '/admin/courses',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text'
  },
  {
    title: 'Notes',
    path: '/admin/notes',
    icon: <FaIcons.FaWallet />,
    cName: 'nav-text'
  },
  {
    title: 'FAQ',
    path: '/admin/faq',
    icon: <FaIcons.FaWallet />,
    cName: 'nav-text'
  }

];