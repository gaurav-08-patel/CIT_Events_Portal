const TeamMembers = () => {
    return (
        <div className="min-h-screen">
            <div className="mx-auto max-w-7xl">
                <div className="shrink-0  rounded-xl p-6 space-y-6 ">
                    <h2 className="text-2xl font-semibold text-gray-800">
                        All the Team Members from team{" "}
                        <span className="text-gray-600 text-3xl">
                            "John Doe's Team"
                        </span>
                    </h2>

                    {/* Table */}
                    <div className="overflow-x-auto overflow-y-auto min-h-50 max-h-180 bg-white">
                        <table className=" w-full border-collapse">
                            <thead className="sticky top-0 border-b border-black">
                                <tr className="bg-gray-100 text-left text-sm font-medium text-gray-700 ">
                                    <th className="px-4 py-4 text-nowrap border border-black">
                                        User Id
                                    </th>
                                    <th className="px-4 py-4 text-nowrap border border-black ">
                                        Participant Name
                                    </th>
                                    <th className="px-4 py-4 text-nowrap border border-black">
                                        Email
                                    </th>
                                    <th className="px-4 py-4 text-nowrap border border-black">
                                        College Name
                                    </th>

                                    <th className="px-4 py-4 text-nowrap border border-black">
                                        DOB
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-t">
                                    <td className="px-4 py-4 border border-black">
                                        1
                                    </td>
                                    <td className="px-4 py-4 border border-black">
                                        Krishna Patel
                                    </td>
                                    <td className="px-4 py-4 border border-black">
                                        xyz@gmail.com
                                    </td>
                                    <td className="px-4 py-4 border border-black">
                                        SRM
                                    </td>
                                    <td className="px-4 py-4 border border-black">
                                        2022-09-21
                                    </td>
                                </tr>
                                <tr className="border-t">
                                    <td className="px-4 py-4 border border-black">
                                        1
                                    </td>
                                    <td className="px-4 py-4 border border-black">
                                        Risab Patel
                                    </td>
                                    <td className="px-4 py-4 border border-black">
                                        xyz@gmail.com
                                    </td>
                                    <td className="px-4 py-4 border border-black">
                                        Chennai Institute of technology
                                    </td>
                                    <td className="px-4 py-4 border border-black">
                                        2002-01-02
                                    </td>
                                </tr>
                                <tr className="border-t">
                                    <td className="px-4 py-4 border border-black">
                                        1
                                    </td>
                                    <td className="px-4 py-4 border border-black">
                                        Anny
                                    </td>
                                    <td className="px-4 py-4 border border-black">
                                        anny23@gmail.com
                                    </td>
                                    <td className="px-4 py-4 border border-black">
                                        Vellore Institute of technology
                                    </td>
                                    <td className="px-4 py-4 border border-black">
                                        2000-01-09
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TeamMembers;
