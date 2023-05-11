// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

error UserNotFound();

contract WhoIsTheRichest {
    struct User {
        address userAddress;
        string name;
        string email;
    }
    User[] public users;

    event UserRegister(address indexed userAddress);
    event UserUpdate(address indexed userAddress);

    function registerUser(address _userAddress, string memory _name, string memory _email) external {
        users.push(User(_userAddress, _name, _email));
        emit UserRegister(_userAddress);
    }

    function updateUser(address _userAddress, string memory _name, string memory _email) external {
        bool updated = false;
        // reading everytime from chain is expensive
        User[] memory memory_users = users;
        for (uint256 i = 0; i < memory_users.length; i++) {
            if (memory_users[i].userAddress == _userAddress) {
                users[i].name = _name;
                users[i].email = _email;
                updated = true;
                emit UserUpdate(_userAddress);
                break;
            }
        }
        // more gas-efficient than "require"
        if (!updated) revert UserNotFound();
    }

    function getAllUsers() external view returns (User[] memory) {
        return (users);
    }

    function getUsersCount() external view returns (uint256 count) {
        return users.length;
    }
}
