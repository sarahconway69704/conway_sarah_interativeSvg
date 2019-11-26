-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: Nov 24, 2019 at 02:36 AM
-- Server version: 5.7.26
-- PHP Version: 7.3.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `makeup_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `makeup_stats`
--

CREATE TABLE `makeup_stats` (
  `ID` int(10) NOT NULL,
  `company_name` varchar(50) NOT NULL,
  `palette_name` varchar(50) NOT NULL,
  `colours` int(10) NOT NULL,
  `mattes` int(10) NOT NULL,
  `shimmers` int(10) NOT NULL,
  `reviews` int(10) NOT NULL,
  `5-stars` int(10) NOT NULL,
  `4-stars` int(10) NOT NULL,
  `3-stars` int(10) NOT NULL,
  `2-stars` int(10) NOT NULL,
  `1-star` int(10) NOT NULL,
  `retail-price` varchar(10) NOT NULL,
  `avg-rating` varchar(10) NOT NULL,
  `image-palette` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `makeup_stats`
--

INSERT INTO `makeup_stats` (`ID`, `company_name`, `palette_name`, `colours`, `mattes`, `shimmers`, `reviews`, `5-stars`, `4-stars`, `3-stars`, `2-stars`, `1-star`, `retail-price`, `avg-rating`, `image-palette`) VALUES
(1, 'Huda Beauty', 'Nude Obessions', 9, 5, 4, 64, 46, 6, 5, 4, 3, '$34', '4.4', 'huda_palette.svg'),
(2, 'Natasha Denona', 'Sunset', 15, 9, 6, 338, 259, 29, 25, 18, 8, '$119', '4.5', 'sunset_palette.svg'),
(3, 'Urban Decay', 'Born to Run', 21, 11, 10, 856, 614, 131, 39, 33, 39, '$65', '4.5', 'urban_palette.svg');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `makeup_stats`
--
ALTER TABLE `makeup_stats`
  ADD PRIMARY KEY (`ID`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
