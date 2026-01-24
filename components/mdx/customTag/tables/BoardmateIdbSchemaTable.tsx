
export default function BoardmateIdbSchemaTable() {
  return (
    <table
  style={{
    width: "800",
    backgroundColor: "#1e1e20",
    color: "white",
    borderCollapse: "collapse",
  }}
>
  <thead>
    <tr
      style={{
        backgroundColor: "#2a2a2e",
        borderBottom: "2px solid #444",
      }}
    >
      <th style={{ padding: "12px 16px", textAlign: "left" }}>store</th>
      <th style={{ padding: "12px 16px", textAlign: "left" }}>keyPath</th>
      <th style={{ padding: "12px 16px", textAlign: "left" }}>주요 필드</th>
      <th style={{ padding: "12px 16px", textAlign: "left" }}>indexes</th>
      <th style={{ padding: "12px 16px", textAlign: "left" }}>비고</th>
    </tr>
  </thead>

  <tbody>
    <tr style={{ borderBottom: "1px solid #333" }}>
      <td style={{ padding: "12px 16px", fontWeight: 700 }}>users</td>
      <td style={{ padding: "12px 16px" }}>
        <code
          style={{
            background: "#333",
            padding: "2px 6px",
            borderRadius: "4px",
          }}
        >
          id
        </code>
      </td>
      <td style={{ padding: "12px 16px" }}>nickname, createdAt</td>
      <td style={{ padding: "12px 16px" }}>by-nickname</td>
      <td style={{ padding: "12px 16px" }}>데모 로그인용 최소 필드</td>
    </tr>

    <tr style={{ borderBottom: "1px solid #333" }}>
      <td style={{ padding: "12px 16px", fontWeight: 700 }}>posts</td>
      <td style={{ padding: "12px 16px" }}>
        <code
          style={{
            background: "#333",
            padding: "2px 6px",
            borderRadius: "4px",
          }}
        >
          id
        </code>
      </td>
      <td style={{ padding: "12px 16px" }}>
        title, content, address, coordinate, createdAt, authorId
      </td>
      <td style={{ padding: "12px 16px" }}>by-createdAt, by-authorId</td>
      <td style={{ padding: "12px 16px" }}>정규화(필드 분리)</td>
    </tr>

    <tr>
      <td style={{ padding: "12px 16px", fontWeight: 700 }}>comments</td>
      <td style={{ padding: "12px 16px" }}>
        <code
          style={{
            background: "#333",
            padding: "2px 6px",
            borderRadius: "4px",
          }}
        >
          id
        </code>
      </td>
      <td style={{ padding: "12px 16px" }}>postId, authorId, content, createdAt</td>
      <td style={{ padding: "12px 16px" }}>by-createdAt, by-postId</td>
      <td style={{ padding: "12px 16px" }}>목록/정렬 최적화</td>
    </tr>
  </tbody>
</table>
  )
}
