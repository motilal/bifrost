-- phpMyAdmin SQL Dump
-- version 4.7.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 15, 2019 at 09:43 PM
-- Server version: 10.1.25-MariaDB
-- PHP Version: 5.6.31

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `bifrost`
--

-- --------------------------------------------------------

--
-- Table structure for table `courses`
--

CREATE TABLE `courses` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `age` varchar(50) DEFAULT NULL,
  `duration` float(5,2) DEFAULT NULL,
  `course_categories_id` int(11) DEFAULT NULL,
  `course_packages_id` int(11) DEFAULT NULL,
  `status` tinyint(1) NOT NULL,
  `created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `courses`
--

INSERT INTO `courses` (`id`, `name`, `age`, `duration`, `course_categories_id`, `course_packages_id`, `status`, `created`) VALUES
(23, 'UK1A Admissions Guidance', '10,11,12', 3.00, 1, 1, 1, '2018-09-22 11:14:47'),
(24, 'UK1B Boarding School Selection', '10,11,12', 3.00, 1, 1, 1, '2018-09-22 11:15:20'),
(25, 'UK1D Entrance Exam Preparation', '10,11,12', 4.00, 1, 1, 1, '2018-09-22 11:15:48'),
(26, 'UK1E Interview Preparation', '10,11,12', 4.00, 1, 1, 1, '2018-09-22 11:16:13'),
(27, 'UK2A Admissions Guidance', '15', 2.00, 1, 2, 1, '2018-09-22 11:16:59'),
(28, 'UK2B Boarding School Selection', '15', 3.00, 1, 2, 1, '2018-09-22 11:17:54'),
(29, 'UK2C Personal Statement', '15', 1.00, 1, 2, 1, '2018-09-22 11:18:42'),
(30, 'UK2D Entrance Exam Preparation', '15', 4.00, 1, 2, 1, '2018-09-22 11:19:09'),
(31, 'UK2E Interview Preparation', '15', 4.00, 1, 2, 1, '2018-09-22 11:19:31'),
(32, 'UK3A Admissions Guidance', '15', 2.00, 1, 3, 1, '2018-09-22 11:20:03'),
(33, 'UK3B Subject Exploration', '15', 4.00, 1, 3, 1, '2018-09-22 11:20:25'),
(34, 'UK3C Profile Planning', '15', 2.00, 1, 3, 1, '2018-09-22 11:21:02'),
(35, 'UK4A Admissions Guidance', '16,17,18', 1.00, 1, 4, 1, '2018-09-22 11:21:35'),
(36, 'UK4B Course / University Selection', '16,17,18', 2.00, 1, 4, 1, '2018-09-22 11:21:50'),
(37, 'UK4C Personal Statement', '16,17,18', 3.00, 1, 4, 1, '2018-09-22 11:22:07'),
(38, 'UK4D Entrance Exam Preparation', '16,17,18', 4.00, 1, 4, 1, '2018-09-22 11:22:20'),
(39, 'UK4E Interview Preparation', '16,17,18', 4.00, 1, 4, 1, '2018-09-22 11:22:30'),
(40, 'UK5A Admissions Guidance', '16,17,18', 1.00, 1, 5, 1, '2018-09-22 11:22:50'),
(41, 'UK5B University Selection', '16,17,18', 2.00, 1, 5, 1, '2018-09-22 11:23:00'),
(42, 'UK5C Personal Statement', '16,17,18', 3.00, 1, 5, 1, '2018-09-22 11:23:15'),
(43, 'UK5D UKCAT/BMAT Preparation', '16,17,18', 4.00, 1, 5, 1, '2018-09-22 11:23:27'),
(44, 'UK5E Medic Interview Preparation', '16,17,18', 4.00, 1, 5, 1, '2018-09-22 11:23:36'),
(45, 'UK6A Admissions Guidance', '16,17,18', 1.00, 1, 6, 1, '2018-09-22 11:23:55'),
(46, 'UK6B Course / University Selection', '16,17,18', 3.00, 1, 6, 1, '2018-09-22 11:24:04'),
(47, 'UK6C Personal Statement', '16,17,18', 4.00, 1, 6, 1, '2018-09-22 11:24:24'),
(48, 'UK6D Entrance Exam Preparation', '16,17,18', 1.00, 1, 6, 1, '2018-09-22 11:24:36'),
(49, 'UK6E Interview Preparation', '16,17,18', 1.00, 1, 6, 1, '2018-09-22 11:24:44'),
(50, 'US2A Admissions Guidance', '15', 2.00, 2, 7, 1, '2018-09-22 11:25:31'),
(51, 'US2B Boarding School Selection', '15', 2.00, 2, 7, 1, '2018-09-22 11:25:49'),
(52, 'US2C Personal Essay Questions', '15', 6.00, 2, 7, 1, '2018-09-22 11:26:06'),
(53, 'US2E Interview Preparation', '15', 4.00, 2, 7, 1, '2018-09-22 11:26:20'),
(54, 'US3A Admissions Guidance', '15', 4.00, 2, 8, 1, '2018-09-22 11:26:37'),
(55, 'US3B Profile Planning', '15', 4.00, 2, 8, 1, '2018-09-22 11:26:44'),
(56, 'US4A Admissions Guidance and Profile Building', '16,17,18', 4.00, 2, 9, 1, '2018-09-22 11:27:27'),
(57, 'US4B University Selection', '16,17,18', 2.00, 2, 9, 1, '2018-09-22 11:27:44'),
(58, 'US4C Personal Essays Ideation and Writing', '16,17,18', 7.00, 2, 9, 1, '2018-09-22 11:27:54'),
(59, 'US4E Interview Preparation', '16,17,18', 2.00, 2, 9, 1, '2018-09-22 11:28:18'),
(60, 'US5A Admissions Guidance and Profile Building', '16,17,18', 3.00, 2, 10, 1, '2018-09-22 11:28:43'),
(61, 'US5B University Selection', '16,17,18', 2.00, 2, 10, 1, '2018-09-22 11:28:53'),
(62, 'US5C Personal Essays Ideation and Writing', '16,17,18', 7.00, 2, 10, 1, '2018-09-22 11:29:05'),
(63, 'US5E Interview Preparation', '16,17,18', 2.00, 2, 10, 1, '2018-09-22 11:29:13'),
(64, 'PS1 PUBLIC SPEAKING 1', '10,11,12', 0.00, 3, NULL, 1, '2018-09-22 11:31:00'),
(65, 'I1 INTERVIEW 1', '10,11,12', 0.00, 3, NULL, 1, '2018-09-22 11:31:11'),
(66, 'PG1 PRE-GCSE', '10,11,12', 0.00, 3, NULL, 1, '2018-09-22 11:31:17'),
(67, 'W1 WRITING', '10,11,12', 0.00, 4, NULL, 1, '2018-09-22 11:31:43'),
(68, 'CRW1 CRITICAL READING & WRITING', '10,11,12', 0.00, 4, NULL, 1, '2018-09-22 11:31:57'),
(69, 'CT1 CRITICAL THINKING', '10,11,12', 0.00, 4, NULL, 1, '2018-09-22 11:32:06'),
(70, 'S1 STUDY SKILLS', '10,11,12', 0.00, 4, NULL, 1, '2018-09-22 11:32:14'),
(71, 'PS2 PUBLIC SPEAKING 2', '13,14,15', 0.00, 3, NULL, 1, '2018-09-22 11:33:04'),
(72, 'I2 INTERVIEW 2', '13,14,15', 0.00, 3, NULL, 1, '2018-09-22 11:33:28'),
(73, 'PG2 PRE-GCSE, GCSE', '13,14,15', 0.00, 3, NULL, 1, '2018-09-22 11:33:49'),
(74, 'W2 WRITING', '13,14,15', 0.00, 4, NULL, 1, '2018-09-22 11:34:13'),
(75, 'CRW2 CRITICAL READING & WRITING', '13,14,15', 0.00, 4, NULL, 1, '2018-09-22 11:34:29'),
(76, 'EE2 ENGLISH ENTRANCE EXAM PREPARATION 16+', '13,14,15', 0.00, 4, NULL, 1, '2018-09-22 11:34:36'),
(77, 'S2 STUDY SKILLS', '13,14,15', 0.00, 4, NULL, 1, '2018-09-22 11:34:43'),
(78, 'PS3 PUBLIC SPEAKING 3', '16,17,18', 0.00, 3, NULL, 1, '2018-09-22 11:35:26'),
(79, 'I3 INTERVIEW 3', '16,17,18', 0.00, 3, NULL, 1, '2018-09-22 11:35:33'),
(80, 'A3/IB3 A LEVELS, IB', '16,17,18', 0.00, 3, NULL, 1, '2018-09-22 11:35:43'),
(81, 'U3 UNIVERSITY SUBJECT', '16,17,18', 0.00, 3, NULL, 1, '2018-09-22 11:35:53'),
(82, 'D3 DEBATING', '16,17,18', 0.00, 4, NULL, 1, '2018-09-22 11:36:03');

-- --------------------------------------------------------

--
-- Table structure for table `course_categories`
--

CREATE TABLE `course_categories` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `status` tinyint(1) NOT NULL,
  `created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `course_categories`
--

INSERT INTO `course_categories` (`id`, `name`, `status`, `created`) VALUES
(1, 'ADMISSIONS UK', 1, '2018-09-22 06:22:24'),
(2, 'ADMISSIONS US', 1, '2018-09-22 06:22:24'),
(3, 'TUTORING', 1, '2018-09-22 06:22:24'),
(4, 'CLASSES', 1, '2018-09-22 06:22:24');

-- --------------------------------------------------------

--
-- Table structure for table `course_packages`
--

CREATE TABLE `course_packages` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `status` tinyint(1) NOT NULL,
  `created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `course_packages`
--

INSERT INTO `course_packages` (`id`, `name`, `status`, `created`) VALUES
(1, 'UK1 BOARDING SCHOOL 13+ ENTRY', 1, '2018-09-22 12:02:34'),
(2, 'UK2 BOARDING SCHOOL 16+ ENTRY', 1, '2018-09-22 12:02:46'),
(3, 'UK3 OXBRIDGE EXTENSION PACKAGE', 1, '2018-09-22 12:03:12'),
(4, 'UK4 OXBRIDGE ADMISSIONS PACKAGE', 1, '2018-09-22 12:03:32'),
(5, 'UK5 MEDIC ADMISSIONS PACKAGE', 1, '2018-09-22 12:03:44'),
(6, 'UK6 NON-OXBRIDGE ADMISSIONS PACKAGE', 1, '2018-09-22 12:03:54'),
(7, 'US2 BOARDING SCHOOL 16+ ENTRY', 1, '2018-09-22 12:04:09'),
(8, 'US3 IVY EXTENSION PACKAGE', 1, '2018-09-22 12:04:21'),
(9, 'US4 IVY LEAGUE PACKAGE', 1, '2018-09-22 12:04:36'),
(10, 'US5 NON-IVY LEAGUE PACKAGE', 1, '2018-09-22 12:04:46');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) UNSIGNED NOT NULL,
  `role` tinyint(1) DEFAULT NULL COMMENT '1 = Admin , 2 - Teacher , 3 = Parents, 4 = Student',
  `first_name` varchar(50) DEFAULT NULL,
  `last_name` varchar(50) DEFAULT NULL,
  `email` varchar(254) NOT NULL,
  `password` varchar(255) NOT NULL,
  `phone` varchar(20) DEFAULT NULL,
  `dob` date DEFAULT NULL,
  `activation_code` varchar(40) DEFAULT NULL,
  `forgotten_password_code` varchar(40) DEFAULT NULL,
  `forgotten_password_time` int(11) UNSIGNED DEFAULT NULL,
  `last_login` int(11) UNSIGNED DEFAULT NULL,
  `active` tinyint(1) UNSIGNED DEFAULT NULL,
  `created_on` int(11) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `role`, `first_name`, `last_name`, `email`, `password`, `phone`, `dob`, `activation_code`, `forgotten_password_code`, `forgotten_password_time`, `last_login`, `active`, `created_on`) VALUES
(1, 1, 'Super', 'Admin', 'admin@admin.com', '123456', '', NULL, '', '41OxdsvwogkRPa7YoTUUku1b6c8113ad4e2f5ac2', 1508057752, 1536338878, 1, 1528767362),
(8, 4, 'Aman', 'Soni', 'mothit@gdjfj.com', '123654', NULL, '2018-09-15', NULL, NULL, NULL, NULL, 1, 0),
(9, 3, 'sdgh', 'Soni', 'mothit1@gdjfj.com', '123654', NULL, '2018-09-15', NULL, NULL, NULL, NULL, 1, 0),
(11, 1, 'Super', 'Admin', 'motilalsoni@gmail.com', '123456', '', NULL, '', '41OxdsvwogkRPa7YoTUUku1b6c8113ad4e2f5ac2', 1508057752, 1536338878, 1, 1528767362);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `courses`
--
ALTER TABLE `courses`
  ADD PRIMARY KEY (`id`),
  ADD KEY `course_categories_id` (`course_categories_id`),
  ADD KEY `course_packages_id` (`course_packages_id`);

--
-- Indexes for table `course_categories`
--
ALTER TABLE `course_categories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `course_packages`
--
ALTER TABLE `course_packages`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `courses`
--
ALTER TABLE `courses`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=83;
--
-- AUTO_INCREMENT for table `course_categories`
--
ALTER TABLE `course_categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT for table `course_packages`
--
ALTER TABLE `course_packages`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
--
-- Constraints for dumped tables
--

--
-- Constraints for table `courses`
--
ALTER TABLE `courses`
  ADD CONSTRAINT `courses_ibfk_1` FOREIGN KEY (`course_categories_id`) REFERENCES `course_categories` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION,
  ADD CONSTRAINT `courses_ibfk_2` FOREIGN KEY (`course_packages_id`) REFERENCES `course_packages` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
