package com.Westine.HotelWestine.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.Westine.HotelWestine.model.Employee;


@Repository
public interface EmployeeRepository extends JpaRepository<Employee, Long>{

}
