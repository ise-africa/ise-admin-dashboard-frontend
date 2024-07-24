import React, { useEffect, useState } from "react";
import classes from "./ContentAnalyticsBoardContainer.module.css";
import HelloUser from "../../../Components/HelloUser/HelloUser";
import ContentAnalyticsDataTable from "../ContentAnalyticsDataTable/ContentAnalyticsDataTable";
import useCourseFromSchool, {
  useCourseById,
  useCoursebyIdWithModules,
} from "../../../Hooks/useCourse";
import { useParams } from "react-router-dom";
import Loader from "../../../Components/Loader/Loader";
import { mutate } from "swr";
import { backend_url } from "../../../Utilities/global";

const ContentAnalyticsBoardContainer = () => {
  // Router
  const { CourseId } = useParams();

  const [courseInsights, setCourseInsights] = useState([
    {
      title: "Uploaded Modules",
      count: 0,
      note: "Total modules uploaded by tutors",
      slug: "uploadedModules",
    },
    {
      title: "Published modules",
      count: 0,
      note: "Total modules accepted and published by administrator",
      slug: "publishedModules",
    },
    {
      title: "Declined modules",
      count: 0,
      note: "Total modules declined by administrator ",
      slug: "declinedModules",
    },
    {
      title: "Recent modules",
      count: 0,
      note: "Total modules resubmitted by the tutor",
      slug: "recentModules",
    },
  ]);
  const [filter, setFilter] = useState("uploaded");

  // Requests
  const { data, isLoading } = useCoursebyIdWithModules(
    CourseId as string,
    {},
    filter
  );

  const { data: courseInfo, isLoading: courseInfoIsLoading } = useCourseById(
    CourseId as string
  );
  const courseModules = data?.data;

  console.log(courseInfo);

  //   Effects
  useEffect(() => {
    if (courseModules) {
      const courseInsightsCopy = courseInsights.map((data) => {
        return { ...data, count: courseModules?.overview[data?.slug] };
      });
      setCourseInsights(courseInsightsCopy);
    }
  }, [courseModules]);

  useEffect(() => {
    mutate(
      `${backend_url}/api/ise/v1/courses/admin/school/${CourseId}?filter=${filter}`
    );
  }, [filter]);

  return (
    <div className={classes.container}>
      <HelloUser
        header={courseInfo?.data?.name || "Course name"}
        paragraph={courseInfo?.data?.description || ""}
      />

      <div className={classes.scrollContainer}>
        <div className={classes.insight}>
          {courseInsights.map((data, i) => (
            <div key={i}>
              <p>{data.title}</p>
              <h2>{isLoading ? "--" : data.count}</h2>
              <span>{data.note}</span>
            </div>
          ))}
        </div>
      </div>

      <ContentAnalyticsDataTable
        filter={filter}
        setFilter={setFilter}
        courseModules={courseModules}
        isLoading={isLoading}
      />
    </div>
  );
};

export default ContentAnalyticsBoardContainer;
