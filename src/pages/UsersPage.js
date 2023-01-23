import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import Layout from "../components/Layout";
import SearchFilter from "../components/SearchFilter";
import UserList from "../components/UserList";
import { useDebounce } from "../custom-hooks/useDebounce";
import { usePrevious } from "../custom-hooks/usePrevious";
import { baseUrl } from "../utils";


const UsersPage = () => {

    const [filterValue, setFilterValue] = useState("");
    const [userList, setUserList] = useState([]);
    const [itemsToDisplay, setItemsToDisplay] = useState([]);
    const [startIndex, setStartIndex] = useState(1);
    const [lastIndex, setLastIndex] = useState(2);
    const [searchUser, setSearchUser] = useState("");
    const itemsPerPage = 3


    const fetchAll = async () => {
        const users = await axios.get(`${baseUrl}?results=100`);
        setUserList(users.data.results);
    }
    const fetchMaleUsers = async () => {
        const users = await axios.get(`${baseUrl}?results=100&gender=male`);
        setUserList(users.data.results);
    };

    const fetchFemaleUsers = async () => {
        const users = await axios.get(`${baseUrl}?results=100&gender=female`);
        setUserList(users.data.results);
    }

    const fetchUsersData = useCallback(() => {
        if (filterValue === 'all') {
            fetchAll()
        } else if (filterValue === 'male') {
            fetchMaleUsers()
        } else if (filterValue === 'female') {
            fetchFemaleUsers()
        } else {
            fetchAll()
        }
    }, [filterValue])

    const handleFilter = (value) => {
        setFilterValue(value)
    }

    const debouncedValue = useDebounce(searchUser, 2000);
    const handleUserInput = (e) => {
        setSearchUser(e.target.value);
    };

   
    const handleSearchUser = useCallback((value) => {
        const newData = userList.filter(user => user.name.first.toLowerCase().includes(value) || user.name.last.toLowerCase().includes(value));
        setUserList(newData);
    }, [userList])

    const onPrev = () => {
        const indexStart = startIndex * itemsPerPage;
        const indexEnd = lastIndex * itemsPerPage;
        if (startIndex > 1) {
            setItemsToDisplay(userList.slice(indexStart, indexEnd));
            setStartIndex(startIndex - 1);
            setLastIndex(lastIndex - 1);
        }
    }

    const onNext = () => {
        const indexStart = startIndex * itemsPerPage;
        const indexEnd = lastIndex * itemsPerPage;
        if (lastIndex <= Math.ceil(100 / itemsPerPage)) {
            setItemsToDisplay(userList.slice(indexStart, indexEnd));
            setStartIndex(startIndex + 1);
            setLastIndex(lastIndex + 1);
        }
    };
    const previous = usePrevious(userList);
    const sliced = userList.slice(0, 3);

    useEffect(() => {
        fetchUsersData()
    }, [filterValue, fetchUsersData]);

    useEffect(() => {
        if (previous !== userList) {
            setItemsToDisplay(sliced)
        }

    }, [previous, sliced, userList]);

    useEffect(() => {
        if (debouncedValue) {
            handleSearchUser(debouncedValue)
        }
    }, [debouncedValue, handleSearchUser])

    return (
        <Layout>
            <SearchFilter searchUser={searchUser} handleUserInput={handleUserInput} handleFilter={handleFilter} />
            <UserList
                searchUser={searchUser} handleUserInput={handleUserInput}
                itemsToDisplay={itemsToDisplay} onPrev={onPrev} onNext={onNext} />
        </Layout>
    )
};

export default UsersPage;