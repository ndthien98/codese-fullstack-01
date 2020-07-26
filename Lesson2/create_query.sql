drop database if exists `shopese`;
create database `shopese`;
use `shopese`;

drop table if exists `product`;
create table `product`(
	productId nvarchar(10) primary key,
    displayName nvarchar(100),
	priceIn int,--
    priceOut int,
    provider nvarchar(100),
    category nvarchar(10),
    salePercent int,
    salePrice int,
	`categoryId` nvarchar(10),
    imageURL nvarchar(100)
);
create table `user`(
	`userId` nvarchar(10) primary key,
    `username` nvarchar(100),
	`displayName` nvarchar(100),
    `email` nvarchar(100),
    `phone` nvarchar(100),
    `password` nvarchar(100),
	`birthday` date,
    `status` int,
    `avatar` nvarchar(100),
    `role` int
);

create table `order`(
	`orderId` nvarchar(10) primary key,
	`userId` nvarchar(10), -- syntax 
    `ship` int,
    `status` nvarchar(100)
);

create table `orderDetail`(
	`orderId` nvarchar(10),
    `productId` nvarchar(10),
    `quantity` int,
    `price` int
);

create table `category`(
	`categoryId` nvarchar(10) primary key,
    `imageURL` nvarchar(100),
    `displayName` nvarchar(100)
);






