USE Lab02;
 
create table Nhanvien(
	MSNV varchar(10) NOT NULL, -- nên để char vì thường các trường này có số ký tự cố định
	Hoten varchar(30) NOT NULL,
	Tuoi int NOT NULL,
	Luong float NOT NULL,
	CONSTRAINT pk_Nhanvien PRIMARY KEY(MSNV)
);

create table Phong(
	MSP varchar(10) NOT NULL, 
	Tenphong varchar(30) NOT NULL,
	Diadiem varchar(100) NOT NULL,
	Nganquy float NOT NULL,
	MSTP varchar(10),
	CONSTRAINT pk_Phong PRIMARY KEY(MSP),
	CONSTRAINT fk1_Phong FOREIGN KEY(MSTP)
							REFERENCES Nhanvien(MSNV)
);

create table Lamviec(
	MSNV varchar(10) NOT NULL,
	MSP varchar(10) NOT NULL,
	Thoigian date NOT NULL,
	CONSTRAINT pk_Lamviec PRIMARY KEY(MSNV, MSP, Thoigian),
	CONSTRAINT fk1_Lamviec FOREIGN KEY(MSNV) 
							REFERENCES Nhanvien(MSNV),
	CONSTRAINT fk2_Lamviec FOREIGN KEY(MSP)
							REFERENCES Phong(MSP)
);
 insert into Nhanvien values ('NV01', 'Teo', 21, 6000000);
 insert into Nhanvien values ('NV02', 'Linh', 21, 6000000);
 insert into Nhanvien values ('NV03', 'Quynh', 21, 7000000);
 insert into Nhanvien values ('NV04', 'Dung', 21, 8000000);
 insert into Nhanvien values ('NV05', 'Phuc', 21, 5000000);
 insert into Nhanvien values ('NV06', 'Minh', 21, 4000000);
 insert into Nhanvien values ('NV07', 'Lan', 21, 10000000);
 insert into Nhanvien values ('NV08', 'Duong', 21, 12000000);
 insert into Nhanvien values ('NV09', 'Binh', 21, 8000000);
 insert into Nhanvien values ('NV10', 'Toan', 21, 9000000);
 insert into Nhanvien values ('NV11', 'Giang', 21, 5000000);
 insert into Nhanvien values ('NV12', 'My', 21, 6000000);
  
 insert into Phong
 values('P01', 'Phongtochuc', 'Tang 2', 2000000, 'NV01');
 insert into Phong
 values('P02', 'Phongkehoach', 'Tang 1', 2000000, 'NV01');
 insert into Phong
 values('P03', 'Payroll', 'Tang 2', 2000000, 'NV01');
 insert into Phong
 values('P04', 'Sales', 'Tang 3', 10000000, 'NV05');
 insert into Phong
 values('P05', 'Shipping', 'Tang 5', 12000000, 'NV06');
 insert into Phong
 values('P06', 'Billing', 'Tang 4', 3000000, 'NV07');
 insert into Phong
 values('P07', 'Marketing', 'Tang 1', 500000, 'NV05');
 insert into Phong
 values('P08', 'Research and Development', 'Tang 2', 2000000, 'NV08');
 
 insert into Lamviec values('NV01', 'P01', '2016-02-12');
 insert into Lamviec values('NV01', 'P02', '2016-12-12');
 insert into Lamviec values('NV02', 'P02', '2014-02-15');
 insert into Lamviec values('NV02', 'P01', '2011-04-12');
 insert into Lamviec values('NV03', 'P03', '2012-04-16');
 insert into Lamviec values('NV04', 'P04', '2011-07-24');
 insert into Lamviec values('NV05', 'P01', '2016-05-20');
 insert into Lamviec values('NV06', 'P07', '2016-06-22');
 insert into Lamviec values('NV07', 'P03', '2015-09-02');
 insert into Lamviec values('NV08', 'P04', '2009-06-18');
 insert into Lamviec values('NV09', 'P05', '2010-09-17');
 insert into Lamviec values('NV10', 'P06', '2013-10-14');
 insert into Lamviec values('NV11', 'P08', '2016-02-12');
 insert into Lamviec values('NV12', 'P08', '2016-02-12');
