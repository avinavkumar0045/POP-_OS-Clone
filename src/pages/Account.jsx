import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {
  User,
  Mail,
  Phone,
  MapPin,
  Edit,
  Save,
  X,
  Camera,
} from "lucide-react";
import { toast } from "react-toastify";

const Account = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: "Roscoe",
    email: "roscoe@gmail.com",
    phone: "+91 454545454545",
    location: "London, UK",
    bio: "Eat , Sleep , Code",
    avatar: "/rocket1.png",
  });

  const [editForm, setEditForm] = useState({ ...profile });
  const [activeAction, setActiveAction] = useState(null);

  // -------------------- PROFILE EDIT HANDLERS --------------------
  const handleEdit = () => {
    setIsEditing(true);
    setEditForm({ ...profile });
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEditForm({ ...profile });
  };

  const handleSave = () => {
    if (!editForm.name || !editForm.email) {
      toast.error("Name and email are required");
      return;
    }

    setProfile({ ...editForm });
    setIsEditing(false);
    toast.success("Profile updated successfully!");
  };

  const handleInputChange = (field, value) => {
    setEditForm((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  // -------------------- PROFILE PIC UPLOAD --------------------
  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setEditForm((prev) => ({
        ...prev,
        avatar: imageUrl,
      }));
      toast.info("Profile picture updated (unsaved)");
    }
  };

  // -------------------- ACCOUNT ACTIONS --------------------
  const handleDownloadData = () => {
    toast.success("Your account data has been exported!");
  };

  const handleDeleteAccount = () => {
    if (
      window.confirm(
        "Are you sure you want to delete your account permanently?"
      )
    ) {
      toast.error("Account deleted successfully.");
      // Add delete API call here
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Header />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">
            My Account
          </h1>
          <p className="text-slate-600 dark:text-slate-300">
            Manage your profile and account settings
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Profile Card */}
          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-slate-200 dark:border-gray-700 p-6">
              <div className="text-center relative">
                <img
                  src={isEditing ? editForm.avatar : profile.avatar}
                  alt="Profile"
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />

                {isEditing && (
                  <label
                    htmlFor="avatarUpload"
                    className="absolute top-20 left-1/2 transform -translate-x-1/2 bg-violet-600 p-2 rounded-full cursor-pointer hover:bg-violet-700 transition-colors"
                  >
                    <Camera className="h-4 w-4 text-white" />
                    <input
                      type="file"
                      id="avatarUpload"
                      accept="image/*"
                      onChange={handleAvatarChange}
                      className="hidden"
                    />
                  </label>
                )}

                <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
                  {profile.name}
                </h2>
                <p className="text-slate-600 dark:text-slate-300 text-sm">
                  {profile.email}
                </p>
              </div>

              <div className="mt-6 space-y-3">
                <div className="flex items-center text-slate-600 dark:text-slate-300">
                  <Phone className="h-4 w-4 mr-3" />
                  <span className="text-sm">{profile.phone}</span>
                </div>
                <div className="flex items-center text-slate-600 dark:text-slate-300">
                  <MapPin className="h-4 w-4 mr-3" />
                  <span className="text-sm">{profile.location}</span>
                </div>
              </div>

              {!isEditing && (
                <button
                  onClick={handleEdit}
                  className="w-full mt-6 bg-violet-600 hover:bg-violet-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2"
                >
                  <Edit className="h-4 w-4" />
                  <span>Edit Profile</span>
                </button>
              )}
            </div>
          </div>

          {/* Profile Details */}
          <div className="lg:col-span-2">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-slate-200 dark:border-gray-700 p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-slate-900 dark:text-white">
                  Profile Information
                </h2>
                {isEditing && (
                  <div className="flex space-x-2">
                    <button
                      onClick={handleSave}
                      className="bg-violet-600 hover:bg-violet-700 text-white px-3 py-1 rounded text-sm font-medium transition-colors flex items-center space-x-1"
                    >
                      <Save className="h-4 w-4" />
                      <span>Save</span>
                    </button>
                    <button
                      onClick={handleCancel}
                      className="bg-slate-200 dark:bg-gray-700 text-slate-700 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-gray-600 px-3 py-1 rounded text-sm font-medium transition-colors flex items-center space-x-1"
                    >
                      <X className="h-4 w-4" />
                      <span>Cancel</span>
                    </button>
                  </div>
                )}
              </div>

              {/* Details Fields */}
              <div className="space-y-6">
                {/* Name */}
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    Full Name
                  </label>
                  {isEditing ? (
                    <input
                      type="text"
                      value={editForm.name}
                      onChange={(e) =>
                        handleInputChange("name", e.target.value)
                      }
                      className="w-full px-4 py-3 border border-slate-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-slate-900 dark:text-white"
                    />
                  ) : (
                    <div className="flex items-center px-4 py-3 bg-slate-50 dark:bg-gray-700 rounded-lg">
                      <User className="h-5 w-5 text-slate-400 mr-3" />
                      <span className="text-slate-900 dark:text-white">
                        {profile.name}
                      </span>
                    </div>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    Email Address
                  </label>
                  {isEditing ? (
                    <input
                      type="email"
                      value={editForm.email}
                      onChange={(e) =>
                        handleInputChange("email", e.target.value)
                      }
                      className="w-full px-4 py-3 border border-slate-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-slate-900 dark:text-white"
                    />
                  ) : (
                    <div className="flex items-center px-4 py-3 bg-slate-50 dark:bg-gray-700 rounded-lg">
                      <Mail className="h-5 w-5 text-slate-400 mr-3" />
                      <span className="text-slate-900 dark:text-white">
                        {profile.email}
                      </span>
                    </div>
                  )}
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    Phone Number
                  </label>
                  {isEditing ? (
                    <input
                      type="tel"
                      value={editForm.phone}
                      onChange={(e) =>
                        handleInputChange("phone", e.target.value)
                      }
                      className="w-full px-4 py-3 border border-slate-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-slate-900 dark:text-white"
                    />
                  ) : (
                    <div className="flex items-center px-4 py-3 bg-slate-50 dark:bg-gray-700 rounded-lg">
                      <Phone className="h-5 w-5 text-slate-400 mr-3" />
                      <span className="text-slate-900 dark:text-white">
                        {profile.phone}
                      </span>
                    </div>
                  )}
                </div>

                {/* Location */}
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    Location
                  </label>
                  {isEditing ? (
                    <input
                      type="text"
                      value={editForm.location}
                      onChange={(e) =>
                        handleInputChange("location", e.target.value)
                      }
                      className="w-full px-4 py-3 border border-slate-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-slate-900 dark:text-white"
                    />
                  ) : (
                    <div className="flex items-center px-4 py-3 bg-slate-50 dark:bg-gray-700 rounded-lg">
                      <MapPin className="h-5 w-5 text-slate-400 mr-3" />
                      <span className="text-slate-900 dark:text-white">
                        {profile.location}
                      </span>
                    </div>
                  )}
                </div>

                {/* Bio */}
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    Bio
                  </label>
                  {isEditing ? (
                    <textarea
                      value={editForm.bio}
                      onChange={(e) =>
                        handleInputChange("bio", e.target.value)
                      }
                      rows={4}
                      className="w-full px-4 py-3 border border-slate-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-slate-900 dark:text-white resize-none"
                    />
                  ) : (
                    <div className="px-4 py-3 bg-slate-50 dark:bg-gray-700 rounded-lg">
                      <p className="text-slate-900 dark:text-white">
                        {profile.bio}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Account Actions */}
        <div className="mt-8 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-slate-200 dark:border-gray-700 p-6">
          <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-6">
            Account Actions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <button
              onClick={() => setActiveAction("password")}
              className="p-4 border border-slate-300 dark:border-gray-600 rounded-lg hover:bg-slate-50 dark:hover:bg-gray-700 transition-colors text-left"
            >
              <h3 className="font-medium text-slate-900 dark:text-white mb-1">
                Change Password
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300">
                Update your account password
              </p>
            </button>
            <button
              onClick={() => setActiveAction("privacy")}
              className="p-4 border border-slate-300 dark:border-gray-600 rounded-lg hover:bg-slate-50 dark:hover:bg-gray-700 transition-colors text-left"
            >
              <h3 className="font-medium text-slate-900 dark:text-white mb-1">
                Privacy Settings
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300">
                Manage your privacy preferences
              </p>
            </button>
            <button
              onClick={handleDownloadData}
              className="p-4 border border-slate-300 dark:border-gray-600 rounded-lg hover:bg-slate-50 dark:hover:bg-gray-700 transition-colors text-left"
            >
              <h3 className="font-medium text-slate-900 dark:text-white mb-1">
                Download Data
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300">
                Export your account data
              </p>
            </button>
            <button
              onClick={handleDeleteAccount}
              className="p-4 border border-red-300 dark:border-red-600 rounded-lg hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors text-left"
            >
              <h3 className="font-medium text-red-700 dark:text-red-400 mb-1">
                Delete Account
              </h3>
              <p className="text-sm text-red-600 dark:text-red-300">
                Permanently delete your account
              </p>
            </button>
          </div>

          {/* Advanced Action Forms */}
          <div className="mt-8">
            {activeAction === "password" && (
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                  Change Password
                </h3>
                <input
                  type="password"
                  placeholder="Old Password"
                  className="w-full px-4 py-2 border rounded-lg dark:bg-gray-700"
                />
                <input
                  type="password"
                  placeholder="New Password"
                  className="w-full px-4 py-2 border rounded-lg dark:bg-gray-700"
                />
                <input
                  type="password"
                  placeholder="Confirm Password"
                  className="w-full px-4 py-2 border rounded-lg dark:bg-gray-700"
                />
                <button className="px-6 py-2 bg-violet-600 text-white rounded-lg hover:bg-violet-500">
                  Update Password
                </button>
              </div>
            )}

            {activeAction === "privacy" && (
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                  Privacy Settings
                </h3>
                <label className="flex items-center space-x-2">
                  <input type="checkbox" className="h-4 w-4" />
                  <span>Show email to others</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input type="checkbox" className="h-4 w-4" />
                  <span>Allow profile indexing on search engines</span>
                </label>
                <button className="mt-2 px-6 py-2 bg-violet-600 text-white rounded-lg hover:bg-violet-500">
                  Save Privacy Settings
                </button>
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Account;
