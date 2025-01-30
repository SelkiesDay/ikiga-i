-- MySQL dump 10.13  Distrib 8.0.40, for Linux (x86_64)
--
-- Host: localhost    Database: ikigai_database
-- ------------------------------------------------------
-- Server version	8.0.40-0ubuntu0.22.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `concepts`
--

DROP TABLE IF EXISTS `concepts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `concepts` (
  `id` int NOT NULL AUTO_INCREMENT,
  `concept_name` varchar(100) NOT NULL,
  `definition` text NOT NULL,
  `image_url` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `concepts`
--

LOCK TABLES `concepts` WRITE;
/*!40000 ALTER TABLE `concepts` DISABLE KEYS */;
INSERT INTO `concepts` VALUES (6,'Kanso','Embrace simplicity in both your environment and your mindset by eliminating clutter in all aspects of your life—physically, emotionally, and mentally. Simplifying your surroundings and thoughts can create space for clarity and peace, allowing you to focus on what truly matters. Minimalism isn’t just about what you remove but about creating room for more intentional and meaningful living.','https://i.pinimg.com/1200x/27/0e/e5/270ee517528bd8d391d4fb79b9620254.jpg'),(7,'Fukinsei','Find beauty in the natural imbalance and imperfection of life. Perfection often hides the authenticity and charm of existence. Life isn’t meant to be flawless, and it is in embracing the flaws and asymmetries that true beauty is found. This principle teaches us to celebrate what makes something or someone unique and unrefined.','https://i.pinimg.com/736x/61/94/3e/61943e28956fb1a5324f436c7a9dc573.jpg'),(8,'Shibumi','Appreciate understated elegance rather than loudness or excess. Shibumi is about valuing quiet, refined, and timeless beauty in both objects and experiences. It\'s about enjoying the simplicity and elegance of life without the need for flamboyance or overstatement. Subtle beauty often reveals its depth and richness only when approached with patience and understanding.','https://i.pinimg.com/736x/98/34/40/9834401b9a7dc80403ab2b2d70803a66.jpg'),(9,'Seijaku','Prioritize calmness, peace, and solitude in your daily life. Creating moments of stillness helps you reconnect with yourself and the world around you. Seijaku encourages you to carve out space for reflection, slowing down to experience a deeper sense of tranquility in everything you do.','https://i.pinimg.com/736x/f0/d2/5a/f0d25a6055d767990266dbf6fafaed59.jpg'),(10,'Yugen','Recognize the mysterious and subtle aspects of life that cannot always be explained or understood. Yugen speaks to the beauty that is beyond the surface, a sense of grace that often exists in fleeting moments or in nature’s quiet details. It encourages an appreciation for the invisible depth of existence, like the quiet beauty of a sunset or the poignancy of a brief interaction.','https://i.pinimg.com/736x/49/bb/50/49bb50170d0e289bca1deda901592a4e.jpg'),(11,'Datsuzoku','Break free from the monotony of everyday life by embracing spontaneity and creativity. Datsuzoku encourages you to let go of rigid routines and explore the joy of unplanned moments. Rediscover wonder and curiosity in the ordinary by allowing yourself the freedom to experience the unexpected.','https://i.pinimg.com/736x/31/22/d6/3122d666c1fc8e3faf07e0c8ec052b0a.jpg'),(12,'Wabi-Sabi','Wabi-sabi is the appreciation of imperfection and the transient nature of all things. It invites us to find beauty in things that are aged, weathered, and imperfect because they tell a story of growth, decay, and renewal. Embrace the impermanence of life and understand that everything is in constant change.','https://i.pinimg.com/736x/49/bb/50/49bb50170d0e289bca1deda901592a4e.jpg'),(13,'Shikata ga nai','This concept encourages the acceptance of circumstances beyond your control. \"It cannot be helped\" teaches you to acknowledge and surrender to reality without resistance. It helps you release frustration when facing situations that are outside your influence, allowing you to move forward with grace and composure.','https://i.pinimg.com/736x/9b/dd/66/9bdd6637d0a7a0784c636cdda2f0e89e.jpg'),(14,'Gaman','Gaman represents quiet strength and emotional resilience. It is the ability to endure hardship or discomfort without complaint, maintaining dignity and self-control throughout. This principle teaches perseverance and patience in difficult situations, helping you navigate challenges with grace.','https://i.pinimg.com/736x/c7/c6/3a/c7c63ab4424cb35508e901e731871eaf.jpg'),(15,'Oubaitori','This concept teaches that everyone blooms in their own time and way, just like different trees have their own unique blossoming period. It reminds you to stop comparing your life path or achievements to others and instead embrace your individuality. Celebrate your own journey and recognize the beauty of others’ unique paths.','https://i.pinimg.com/736x/d0/40/58/d04058d71a2fd5e8cbe441ccb5d9b232.jpg'),(16,'Kaizen','Kaizen is the philosophy of constant, incremental improvements. Rather than aiming for perfection, it encourages ongoing progress through small, steady changes. This principle is about lifelong learning and development, focusing on the process rather than the outcome.','https://i.pinimg.com/736x/c0/22/1b/c0221b2b9288399f5881ae8404618802.jpg'),(17,'Mono no Aware','Mono no Aware is the awareness of the impermanence of life and the sadness that comes with it. This recognition helps you to cherish fleeting moments and appreciate their beauty while they last, knowing they will eventually fade.','https://i.pinimg.com/736x/06/58/ef/0658ef4e40c8a5902ec27451204a0cc8.jpg'),(18,'Ikigai','Ikigai represents the intersection of what you love, what you’re good at, what the world needs, and what you can be rewarded for. It’s about finding your reason for being and understanding what brings you fulfillment, leading to a more purposeful and joyful life.','https://i.pinimg.com/736x/4a/8f/dc/4a8fdccbe64cadc589f222604b25df6a.jpg'),(19,'Kenjō','This is the most direct concept related to humility. Kenjō embodies the idea of avoiding self-promotion and maintaining modesty in speech and actions. It encourages individuals to focus on collective well-being rather than personal achievements.','https://i.pinimg.com/736x/47/29/6b/47296b7344db74b1abf16757ea39264e.jpg'),(20,'Honne and Tatemae','This concept reflects the practice of prioritizing group harmony over personal expression, which often requires humility. Tatemae (public face) involves setting aside personal desires or feelings (honne) to maintain harmony and avoid conflict. This practice inherently involves a humble attitude.','https://i.pinimg.com/736x/14/7d/74/147d743435b5fc893b6ddc08f415c939.jpg'),(21,'Shu Ha Ri','This concept represents the stages of learning, growth, and independence. In the Ri (離) stage, the individual transcends the rules and traditions they initially learned, creating their own path and fully embracing autonomy.','https://i.pinimg.com/736x/d6/18/b0/d618b01e11b7f7157453ce2f710a1e43.jpg'),(22,'Jiritsu','Jiritsu directly translates to \"self-reliance\" or \"independence\" and is one of the closest concepts to autonomy. It emphasizes personal responsibility, self-determination, and the ability to act independently while maintaining respect for others.','https://i.pinimg.com/736x/e3/0e/c6/e30ec63ac0872b487428c3520ec3c780.jpg');
/*!40000 ALTER TABLE `concepts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ikigai_maps`
--

DROP TABLE IF EXISTS `ikigai_maps`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ikigai_maps` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `passions` json DEFAULT NULL,
  `missions` json DEFAULT NULL,
  `professions` json DEFAULT NULL,
  `vocations` json DEFAULT NULL,
  `linked_passions_missions` json DEFAULT NULL,
  `final_ikigai` json DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `ikigai_maps_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ikigai_maps`
--

LOCK TABLES `ikigai_maps` WRITE;
/*!40000 ALTER TABLE `ikigai_maps` DISABLE KEYS */;
INSERT INTO `ikigai_maps` VALUES (1,1,'[\"Passion1\", \"Passion2\"]','[\"Mission1\", \"Mission2\"]','[\"Profession1\", \"Profession2\"]','[\"Vocation1\"]','{\"Passion1\": \"Mission1\"}','{\"love\": \"Passion1\", \"mission\": \"Mission1\"}','2025-01-16 17:17:21','2025-01-16 17:17:21');
/*!40000 ALTER TABLE `ikigai_maps` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password_hash` varchar(255) NOT NULL,
  `profile_photo` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Denis Sefer','seferdenis01@gmail.com','$2a$10$SO3XC2UHdnP9F/BZesN0ROpasZNTMveFMTOYGKLpICEZdPqakVGDa',NULL,'2025-01-15 15:20:43','2025-01-15 15:20:43');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-01-17 23:14:59
