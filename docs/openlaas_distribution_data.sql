DROP TABLE IF EXISTS `distribution_data_directory`;
CREATE TABLE `distribution_data_directory` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'primary key',
  `pid` int(11) NOT NULL DEFAULT '-1' COMMENT 'parent id',
  `name` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT 'name',
  `description` varchar(256) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT 'description',
  `manual_version` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT 'version',
  `create_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT 'create time',
  `update_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT 'timeupdate time',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;