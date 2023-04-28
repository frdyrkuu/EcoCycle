-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Apr 28, 2023 at 03:48 AM
-- Server version: 8.0.30
-- PHP Version: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `users`
--

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int NOT NULL,
  `username` varchar(64) NOT NULL,
  `useremail` varchar(128) NOT NULL,
  `userphone` varchar(24) NOT NULL,
  `dt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `useremail`, `userphone`, `dt`) VALUES
(1, 'Zaid Khalid', 'zaid@gmail.com', '876-564-6544', '2019-02-12 06:22:25'),
(2, 'Usman', 'usman@gmail.com', '887-655-8745', '2019-02-12 06:22:43'),
(3, 'Jhon', 'jhon@gmail.com', '878-874-6523', '2019-02-12 06:22:57'),
(4, 'Zohaib', 'zohaib@gmail.com', '878-652-6985', '2019-02-12 06:23:20'),
(5, 'Akram', 'akram@gmail.com', '324-985-3214', '2019-02-12 06:23:36'),
(6, 'Aslam', 'aslam@gmail.com', '777-874-8569', '2019-02-12 06:23:56'),
(7, 'Daood', 'daood@gmail.com', '666-123-5412', '2019-02-12 06:24:19'),
(8, 'Henary', 'henary@gmail.com', '234-236-1254', '2019-02-12 06:32:48'),
(9, 'Mark Jhon', 'mjhon@gmail.com', '324-569-3652', '2019-02-12 06:33:06');

-- --------------------------------------------------------

--
-- Table structure for table `user_admin`
--

CREATE TABLE `user_admin` (
  `id` int NOT NULL,
  `name` varchar(255) NOT NULL,
  `username` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `password` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `user_admin`
--

INSERT INTO `user_admin` (`id`, `name`, `username`, `password`, `created_at`) VALUES
(1, 'testing', 'testing@gmail.com', '$2y$10$N3S/GacjxRFl3VDuPfUF.eH2rOVozu01sjjsYcvLcAo4jrOUdzlX.', '2023-04-28 03:15:42'),
(2, 'admin', 'admin', '$2y$10$Ee59vmpVaxIYKaXzMw6xceLt86q8236JFqKJubnLZvo.9DvbWUebG', '2023-04-28 03:47:28');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user_admin`
--
ALTER TABLE `user_admin`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `user_admin`
--
ALTER TABLE `user_admin`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
