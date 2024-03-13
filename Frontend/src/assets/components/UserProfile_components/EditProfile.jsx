import React, { useState } from "react";
import { Badge, Avatar, Input, Textarea, Button } from "@nextui-org/react";
import { useDispatch, useSelector } from "react-redux";
import { updateProfile } from "../../redux/reducers/UpdateUserReducer";
// import { set } from "mongoose";

const EditProfile = () => {

    const dispatch = useDispatch();
    const data = useSelector((state) => state.me.data);
    const [img,setImg] = useState(null)
    // const [username,setUsername] = useState(data.username || null)
    // const [email,setEmail] = useState(data.email || null)
    // const [bio,setBio] = useState(data.bio || null)
    // const [gender,setGender] = useState(data.gender || null)
      const [preview, setPreview] = useState(data.profileImage || "https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-Image.png");
    const [formData, setFormData] = useState({
        username: data.username || "",
        email: data.email || "",
        gender: data.gender || "",
        bio: data.bio || "",
        profileImage: null,
    });

    // const getProfile = () => {
    //     return data.profileImage || "https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-Image.png";
    // };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        // console.log(file);
        setImg(file)
        setFormData({ ...formData, profileImage: file });
        setPreview(URL.createObjectURL(file));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const test = new FormData();
        test.append("username",formData.username );
        test.append("email", formData.email);
        test.append("userphoto",img );
        test.append("bio", formData.bio);
        test.append("gender",formData.gender);
        dispatch(updateProfile(test));
    };

    return (
        <div className="flex flex-col" style={{ gap: "3.5rem", paddingRight: "15rem", marginBottom: "3rem", width: "155%" }}>
            <div>
                <h2 style={{ fontSize: "1.5rem", fontWeight: "bolder" }}>Edit Profile</h2>
            </div>

            {/* <Badge content="new" color="primary" size="sm">
                    <Avatar
                        style={{ width: "100px", height: "100px" }}
                        isBordered
                        radius="md"
                        color="primary"
                        size="lg"
                        src={getProfile()}
                    />
                </Badge>
                <Button
                    color="primary"
                    variant="shadow"
                    style={{ paddingLeft: "1.5rem", paddingRight: "1.5rem" }}
                    textValue="Submit"
                    >
                    Save
                </Button> */}

            <div>
                <form onSubmit={handleSubmit}>
                    <div className="flex justify-between flex-row" style={{marginBottom:"1rem"}}>
                        <label htmlFor="profileImageInput">
                            <img
                                src={preview}
                                alt="Profile Preview"
                                style={{ width: "150px" , height: "100px", cursor: "pointer" }}
                            />
                        </label>
                        <input
                            id="profileImageInput"
                            type="file"
                            name="userphoto"
                            accept=".png, .jpg, .jpeg"
                            onChange={handleImageChange}
                            style={{ display: "none" }}
                        />
                    </div>
                    <div className="flex flex-col" style={{ gap: "2rem" }}>
                        <div className="flex w-full flex-wrap items-end md:flex-nowrap mb-6 md:mb-0 gap-4">
                            <Input
                                variant="faded"
                                key="outside"
                                type="text" // Changed type to text
                                name="username" // Added name attribute
                                label="Username"
                                labelPlacement="outside"
                                placeholder="Enter your name"
                                value={formData.username}
                                onChange={handleChange}

                            />
                        </div>
                        <div className="flex w-full flex-wrap items-end md:flex-nowrap mb-6 md:mb-0 gap-4">
                            <Input
                                variant="faded"
                                key="outside"
                                type="email" // Changed type to email
                                name="email" // Added name attribute
                                label="Email"
                                labelPlacement="outside"
                                placeholder="Enter your email"
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="flex w-full flex-wrap items-end md:flex-nowrap mb-6 md:mb-0 gap-4">
                            <Input
                                variant="faded"
                                key="outside"
                                type="text" // Changed type to text
                                name="gender" // Added name attribute
                                label="Gender"
                                labelPlacement="outside"
                                placeholder="Type your gender"
                                value={formData.gender}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <Textarea
                                key="outside"
                                variant="faded"
                                label="Bio"
                                name="bio"
                                labelPlacement="outside"
                                placeholder="Tell us about yourself"
                                value={formData.bio}
                                onChange={handleChange}
                                type="text"
                            />
                        </div>
                    </div>

                    <div className="flex justify-end" style= {{marginTop:"1rem"}}>
                        <Button onClick={handleSubmit}
                            color="primary"
                            variant="shadow"
                            style={{ paddingLeft: "1.5rem", paddingRight: "1.5rem" }}
                            textValue="Submit">
                            Submit
                        </Button>
                    </div>
                </form>
            </div >
        </div >
    )
}

export default EditProfile;