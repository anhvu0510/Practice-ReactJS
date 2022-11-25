import React from 'react'

export default function ToDo({ job = {} }) {
  return (<li key={job.id}>{job.job}</li>)
}
