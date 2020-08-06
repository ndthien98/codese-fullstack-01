-- mysql://root:Codese2020@codedidungso.me:3306/shopese-thien

drop database if exists `shopese-thien`;
create database `shopese-thien`;
use `shopese-thien`;

drop table if exists `account`;
create table `account`(
`username` nvarchar(100) primary key,
`password` nvarchar(100) not null,
`role` enum('ADMIN','STAFF','USER'), -- enumerator 
`display` nvarchar(100),
`email` nvarchar(100),
`phone` nvarchar(100),
`address` nvarchar(100),
`birthday` date,
`avatar` nvarchar(100),
`status` nvarchar(100) default 'ACTIVE',
`created_at` timestamp default current_timestamp,
`updated_at` timestamp default current_timestamp on update current_timestamp
);

drop table if exists `category`;
create table `category`(
`categoryId` nvarchar(100) primary key,
`display` nvarchar(100),
`description` nvarchar(100),
`imageUrl` nvarchar(100)
);

drop table if exists `product`;
create table `product`(
`productId` nvarchar(100) primary key,
`display` nvarchar(100),
`provider` nvarchar(100),
`description` nvarchar(100),
`imageUrl` nvarchar(100),
`priceIn` integer,
`priceOut` integer,
`priceSale` integer,
`shipday` integer,
`instock` integer,
`status` nvarchar(100),
`categoryId` nvarchar(100),
foreign key (`categoryId`) references `category`(`categoryId`),
`created_at` timestamp default current_timestamp,
`updated_at` timestamp default current_timestamp on update current_timestamp
);

drop table if exists `order`;
create table `order`(
`orderId` nvarchar(100) primary key,
`username` nvarchar(100),
`productId` nvarchar(100),
`price` integer,
foreign key (`productId`) references `product`(`productId`),
foreign key (`username`) references `account`(`username`),
`amount` integer,
`note` nvarchar(100),
`status` nvarchar(100),
`created_at` timestamp default current_timestamp,
`updated_at` timestamp default current_timestamp on update current_timestamp
);

select * from `account`;
select * from `category`;
select * from `product`;
select * from `order`;


-- liệt kê tất cả danh sách product 
-- liệt kê tất cả danh sách account có role STAFF 
-- liệt kê tất cả danh sách order 
-- liệt kê tất cả danh sách order của người dùng 'xxx' 

-- thống kê lãi - lỗ của các order 
-- thống kê lãi - lỗ của các order của user 'xxx'
-- thống kê lãi - lỗ của các order của loại mặt hàng 'xxx'
-- thống kê lãi - lỗ của các order của user 'xxx' đối với loại mặt hàng 'xxx'

-- liệt kê tất cả danh sách category - use case xem hàng theo category 
-- hiển thị các mặt hàng theo category 'xxx'
-- hiển thị các mặt hàng theo category 'xxx' và 'yyy'

-- tạo mới product
-- tạo mới order
-- tạo mới user 

-- cập nhập số lượng hàng trong kho của mặt hàng xxx
-- cập nhập đơn hàng xxx thành trạng thái đã ship
-- cập nhập tất cả thông tin của user 

-- pagination 
-- filter
-- search 
-- sort by sys_config

select * from `account` ;
select * from `category` ;
select * from `product` ;
select * from `order` ;


